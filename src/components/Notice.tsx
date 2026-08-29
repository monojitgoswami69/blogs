interface NoticeProps {
  type?: 'info' | 'warning' | 'tip';
  title?: string;
  children: React.ReactNode;
}

export function Notice({ type = 'info', title, children }: NoticeProps) {
  return (
    <div className={`notice-callout notice-${type}`}>
      {title && <div className="notice-title">{title}</div>}
      <div className="notice-content">{children}</div>
    </div>
  );
}
