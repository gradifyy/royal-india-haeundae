import type { ReactNode } from "react";

export function PageIntro({
  eyebrow,
  title,
  body,
  aside,
}: {
  eyebrow: string;
  title: string;
  body: string;
  aside?: ReactNode;
}) {
  return (
    <section className="page-intro">
      <div className="page-container page-intro-grid">
        <div>
          <p className="eyebrow eyebrow-light">{eyebrow}</p>
          <h1 className="display-title">{title}</h1>
        </div>
        <div className="page-intro-copy">
          <p>{body}</p>
          {aside}
        </div>
      </div>
    </section>
  );
}
