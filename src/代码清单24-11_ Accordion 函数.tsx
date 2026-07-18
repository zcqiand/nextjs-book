function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        aria-expanded={isOpen}
        aria-controls={`panel-${title}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span aria-hidden="true">{isOpen ? '▲' : '▼'}</span>
      </button>

      <div
        id={`panel-${title}`}
        role="region"
        aria-labelledby={title}
        hidden={!isOpen}
      >
        {children}
      </div>
    </div>
  );
}