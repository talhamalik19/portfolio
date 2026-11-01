"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import { MermaidDiagram } from "./mermaid-diagram";

interface MarkdownContentProps {
  content: string;
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => (
          <h1 className="mb-6 mt-12 text-3xl font-bold tracking-tight first:mt-0 md:text-4xl">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="mb-4 mt-12 border-b border-border pb-3 text-2xl font-bold md:text-3xl">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="mb-3 mt-8 text-xl font-semibold text-primary">
            {children}
          </h3>
        ),
        p: ({ children }) => (
          <p className="mb-4 leading-relaxed text-muted-foreground">
            {children}
          </p>
        ),
        strong: ({ children }) => (
          <strong className="font-semibold text-foreground">{children}</strong>
        ),
        em: ({ children }) => (
          <em className="text-muted-foreground italic">{children}</em>
        ),
        ul: ({ children }) => (
          <ul className="mb-6 space-y-2 pl-0">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="mb-6 list-decimal space-y-2 pl-6">{children}</ol>
        ),
        li: ({ children }) => (
          <li className="flex items-start gap-2 text-muted-foreground">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
            <span>{children}</span>
          </li>
        ),
        hr: () => (
          <hr className="my-12 border-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent h-px" />
        ),
        blockquote: ({ children }) => (
          <blockquote className="my-6 border-l-2 border-primary/40 pl-6 italic text-muted-foreground">
            {children}
          </blockquote>
        ),
        table: ({ children }) => (
          <div className="my-6 overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">{children}</table>
          </div>
        ),
        thead: ({ children }) => (
          <thead className="border-b border-border bg-secondary/50">
            {children}
          </thead>
        ),
        th: ({ children }) => (
          <th className="px-4 py-3 text-left font-semibold text-foreground">
            {children}
          </th>
        ),
        td: ({ children }) => (
          <td className="border-t border-border/50 px-4 py-3 text-muted-foreground">
            {children}
          </td>
        ),
        code: ({ className, children }) => {
          const match = /language-(\w+)/.exec(className || "");
          const language = match?.[1];
          const codeString = String(children).replace(/\n$/, "");

          if (language === "mermaid") {
            return <MermaidDiagram chart={codeString} />;
          }

          if (className) {
            return (
              <code className="my-4 block overflow-x-auto rounded-lg border border-border bg-secondary/50 p-4 font-mono text-xs text-primary">
                {codeString}
              </code>
            );
          }

          return (
            <code className="rounded bg-secondary/80 px-1.5 py-0.5 font-mono text-xs text-primary">
              {children}
            </code>
          );
        },
        pre: ({ children }) => <>{children}</>,
        img: ({ src, alt }) => {
          if (!src || typeof src !== "string") return null;
          return (
            <span className="my-6 block overflow-hidden rounded-xl border border-border">
              <Image
                src={src}
                alt={alt || "Case study screenshot"}
                width={1200}
                height={675}
                className="w-full object-cover"
              />
            </span>
          );
        },
        a: ({ href, children }) => (
          <a
            href={href}
            className="text-primary underline-offset-4 hover:underline"
            target={href?.startsWith("http") ? "_blank" : undefined}
            rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            {children}
          </a>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
