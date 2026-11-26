import QuickQuote from './QuickQuote';

export function QuoteLink({ children, className, enabled = true, onClick }) {
  function handleClick(event) {
    if (onClick) onClick(event);
    if (!enabled || event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const target = document.getElementById('quote');
    if (target && target.tagName === 'DETAILS') target.open = true;
  }
  return <a href={enabled ? '#quote' : '/contact'} onClick={handleClick} className={className}>{children}</a>;
}

export function QuotePanel({ sourcePage }) {
  return (
    <details id="quote" className="group scroll-mt-28 max-w-4xl rounded-lg border border-gray-200 p-4 sm:p-6">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded bg-black px-5 py-3 font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 [&::-webkit-details-marker]:hidden">
        <span className="group-open:hidden">Request a Quote</span>
        <span className="hidden group-open:inline">Close quote form</span>
        <span aria-hidden="true" className="group-open:hidden">+</span>
        <span aria-hidden="true" className="hidden group-open:inline">−</span>
      </summary>
      <QuickQuote embedded sourcePage={sourcePage} />
    </details>
  );
}
