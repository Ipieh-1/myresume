'use client';

import { useState } from 'react';
import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

function ResponsiveDropdown({
  name,
  options,
  placeholder,
  defaultValue = '',
  required = false,
  onValueChange,
}) {
  const [value, setValue] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const dropdownRef = useRef(null);
  const selectedIndex = options.findIndex((option) => option.value === value);
  const listboxId = `${name}-options`;

  function selectValue(nextValue) {
    setValue(nextValue);
    onValueChange?.(nextValue);
  }

  useEffect(() => {
    function handleOutsidePointer(event) {
      if (!dropdownRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('pointerdown', handleOutsidePointer);
    return () => document.removeEventListener('pointerdown', handleOutsidePointer);
  }, []);

  useEffect(() => {
    const form = dropdownRef.current?.closest('form');
    if (!form) return undefined;

    function handleFormReset() {
      setValue(defaultValue);
      onValueChange?.(defaultValue);
      setIsOpen(false);
    }

    form.addEventListener('reset', handleFormReset);
    return () => form.removeEventListener('reset', handleFormReset);
  }, [defaultValue, onValueChange]);

  function openDropdown() {
    setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0);
    setIsOpen(true);
  }

  function handleTriggerKeyDown(event) {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (!isOpen) {
        openDropdown();
      } else {
        setActiveIndex((index) => (index + 1) % options.length);
      }
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (!isOpen) {
        openDropdown();
      } else {
        setActiveIndex((index) => (index - 1 + options.length) % options.length);
      }
    } else if ((event.key === 'Enter' || event.key === ' ') && isOpen) {
      event.preventDefault();
      selectValue(options[activeIndex].value);
      setIsOpen(false);
    } else if (event.key === 'Escape' && isOpen) {
      event.preventDefault();
      setIsOpen(false);
    } else if ((event.key === 'Enter' || event.key === ' ') && !isOpen) {
      event.preventDefault();
      openDropdown();
    }
  }

  return (
    <div ref={dropdownRef} className="relative mt-2 min-w-0">
      <input type="hidden" name={name} value={value} />
      <button
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listboxId}
        aria-activedescendant={isOpen ? `${listboxId}-option-${activeIndex}` : undefined}
        aria-required={required || undefined}
        aria-invalid={required && !value}
        data-select-trigger={name}
        onClick={() => (isOpen ? setIsOpen(false) : openDropdown())}
        onKeyDown={handleTriggerKeyDown}
        className="flex min-h-12 w-full min-w-0 items-center justify-between gap-3 rounded-xl border border-white/15 bg-[#182231] py-3 pl-4 pr-4 text-left text-base text-white outline-none transition-colors hover:border-white/30 focus:border-amber-200 focus:ring-2 focus:ring-amber-200/20"
      >
        <span className={`min-w-0 break-words ${value ? 'text-white' : 'text-white/45'}`}>
          {options.find((option) => option.value === value)?.label ?? placeholder}
        </span>
        <ChevronDown aria-hidden="true" className={`size-4 shrink-0 text-white/55 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div
          id={listboxId}
          role="listbox"
          aria-label={`${name} options`}
          className="absolute inset-x-0 top-full z-30 mt-2 max-h-60 w-full overflow-y-auto overscroll-contain rounded-2xl border border-white/15 bg-[#182231] p-1.5 shadow-2xl shadow-black/40"
        >
          {options.map((option, index) => (
            <div
              key={option.value}
              id={`${listboxId}-option-${index}`}
              role="option"
              aria-selected={value === option.value}
              onMouseEnter={() => setActiveIndex(index)}
              onPointerDown={(event) => {
                event.preventDefault();
                selectValue(option.value);
                setIsOpen(false);
              }}
              className={`cursor-pointer break-words rounded-xl px-3 py-3 text-sm leading-5 transition-colors ${
                activeIndex === index
                  ? 'bg-amber-200/15 text-amber-100'
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
              }`}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ContactForm({ endpoint }) {
  const [submissionState, setSubmissionState] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [service, setService] = useState('');
  const [timeline, setTimeline] = useState('');
  const [budget, setBudget] = useState('');
  const [designReadiness, setDesignReadiness] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;

    const service = form.elements.namedItem('service');
    if (!service.value) {
      setSubmissionState('error');
      setErrorMessage('Please select a service before sending your inquiry.');
      form.querySelector('[data-select-trigger="service"]')?.focus();
      return;
    }

    if (!endpoint) {
      setSubmissionState('error');
      setErrorMessage('Form delivery is not configured yet.');
      return;
    }

    setSubmissionState('submitting');
    setErrorMessage('');

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      const result = await response.json().catch(() => null);

      if (!response.ok) {
        const formErrors = result?.errors?.map(({ message }) => message).join(' ');
        throw new Error(formErrors || 'Your message could not be sent. Please try again.');
      }

      form.reset();
      setSubmissionState('success');
    } catch (error) {
      setErrorMessage(error.message || 'Your message could not be sent. Please try again.');
      setSubmissionState('error');
    }
  }

  return (
    <form
      action={endpoint}
      method="POST"
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8"
    >
      <input type="hidden" name="_subject" value="New portfolio project inquiry" />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="min-w-0 text-sm font-medium text-white/80">
          Name
          <input
            autoComplete="name"
            className="mt-2 min-h-12 w-full min-w-0 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-base text-white outline-none transition-colors placeholder:text-white/35 focus:border-amber-200"
            name="Name"
            placeholder="Your name"
            required
          />
        </label>
        <label className="min-w-0 text-sm font-medium text-white/80">
          Email
          <input
            autoComplete="email"
            className="mt-2 min-h-12 w-full min-w-0 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-base text-white outline-none transition-colors placeholder:text-white/35 focus:border-amber-200"
            name="Email"
            placeholder="you@example.com"
            required
            type="email"
          />
        </label>
        <div className="min-w-0">
          <label className="block text-sm font-medium text-white/80">
            What do you need?
            <ResponsiveDropdown
              name="service"
              placeholder="Select a Service"
              required
              onValueChange={setService}
              options={[
                { value: 'Landing Page', label: 'Landing Page' },
                { value: 'Multi-Page Business Website', label: 'Multi-Page Business Website' },
                { value: 'Web Application Front End', label: 'Web Application Front End' },
                { value: 'Other', label: 'Other' },
              ]}
            />
          </label>
          {service === 'Other' && (
            <label className="mt-4 block text-sm font-medium text-white/80">
              Please describe what you need
              <input
                autoComplete="off"
                className="mt-2 min-h-12 w-full min-w-0 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-base text-white outline-none transition-colors placeholder:text-white/35 focus:border-amber-200"
                name="Service Details"
                placeholder="Describe the service you need"
                required
              />
            </label>
          )}
        </div>
        <div className="min-w-0">
          <label className="block text-sm font-medium text-white/80">
            Preferred timeline
            <ResponsiveDropdown
              name="Timeline"
              placeholder="Select a preferred timeline"
              onValueChange={setTimeline}
              options={[
                { value: '1-2 weeks', label: '1-2 weeks' },
                { value: '2-4 weeks', label: '2-4 weeks' },
                { value: '3-5 weeks', label: '3-5 weeks' },
                { value: 'Flexible', label: 'Flexible' },
                { value: 'Other', label: 'Other' },
              ]}
            />
          </label>
          {timeline === 'Other' && (
            <label className="mt-4 block text-sm font-medium text-white/80">
              Please specify your preferred timeline
              <input
                autoComplete="off"
                className="mt-2 min-h-12 w-full min-w-0 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-base text-white outline-none transition-colors placeholder:text-white/35 focus:border-amber-200"
                name="Timeline Details"
                placeholder="For example, by the end of next month"
                required
              />
            </label>
          )}
        </div>
        <div className="min-w-0">
          <label className="block text-sm font-medium text-white/80">
            Estimated Budget
            <ResponsiveDropdown
              name="Budget"
              placeholder="Select a budget range"
              onValueChange={setBudget}
              options={[
                { value: 'Under ₦150,000 / $300 USD', label: 'Under ₦150,000 / $300 USD' },
                { value: '₦150,000 – ₦350,000 / $300 – $800 USD', label: '₦150,000 – ₦350,000 / $300 – $800 USD' },
                { value: '$800 – $1,500+ USD', label: '$800 – $1,500+ USD' },
                { value: 'Not sure / Need advice', label: 'Not sure / Need advice' },
                { value: 'Other', label: 'Other' },
              ]}
            />
          </label>
          {budget === 'Other' && (
            <label className="mt-4 block text-sm font-medium text-white/80">
              Please specify your budget
              <input
                autoComplete="off"
                className="mt-2 min-h-12 w-full min-w-0 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-base text-white outline-none transition-colors placeholder:text-white/35 focus:border-amber-200"
                name="Budget Details"
                placeholder="Enter your estimated budget"
                required
              />
            </label>
          )}
        </div>
        <div className="min-w-0">
          <label className="block text-sm font-medium text-white/80">
            Do you have a design ready?
            <ResponsiveDropdown
              name="Design Readiness"
              placeholder="Select an option"
              onValueChange={setDesignReadiness}
              options={[
                { value: 'Yes, I have Figma / Adobe XD files ready', label: 'Yes, I have Figma / Adobe XD files ready' },
                { value: 'I have reference sites, but need a design', label: 'I have reference sites, but need a design' },
                { value: 'No design, starting from scratch', label: 'No design, starting from scratch' },
                { value: 'Other', label: 'Other' },
              ]}
            />
          </label>
          {designReadiness === 'Other' && (
            <label className="mt-4 block text-sm font-medium text-white/80">
              Please describe your design readiness
              <input
                autoComplete="off"
                className="mt-2 min-h-12 w-full min-w-0 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-base text-white outline-none transition-colors placeholder:text-white/35 focus:border-amber-200"
                name="Design Readiness Details"
                placeholder="Add any details about your design"
                required
              />
            </label>
          )}
        </div>
        <label className="min-w-0 text-sm font-medium text-white/80 sm:col-span-2">
          Project Details
          <textarea
            className="mt-2 min-h-36 w-full min-w-0 resize-y rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-base text-white outline-none transition-colors placeholder:text-white/35 focus:border-amber-200"
            name="Message"
            placeholder="A few details about your goals, audience, and what you have in mind..."
            required
            rows={5}
          />
        </label>
      </div>

      <div className="mt-6 flex flex-col items-start gap-3">
        <button
          className="rounded-full bg-amber-200 px-6 py-3 text-sm font-bold text-[#111827] transition-colors hover:bg-amber-100 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={!endpoint || submissionState === 'submitting'}
          type="submit"
        >
          {submissionState === 'submitting' ? 'Sending...' : 'Send Project Inquiry'}
        </button>
        {submissionState === 'success' && (
          <p aria-live="polite" className="text-emerald-300">
            Thank You! Your inquiry was sent. We&apos;ll get back to you as soon as possible.
          </p>
        )}
        {submissionState === 'error' && (
          <p aria-live="polite" className="text-sm text-red-300">
            {errorMessage}
          </p>
        )}
        {!endpoint && (
          <p className="text-sm text-white/55">
            Form delivery will be enabled after the Formspree endpoint is configured.
          </p>
        )}
      </div>
    </form>
  );
}
