import React, { useEffect, useState } from 'react';
import { createHighlighter } from 'shiki';

const CodeBlock = ({ codeString, language }: { codeString: string; language?: string }) => {
  const [formattedCode, setFormattedCode] = useState<string | null>(null);

  useEffect(() => {
    const loadHighlighter = async () => {
      try {
        const highlighter = await createHighlighter({
          langs: ['javascript', 'typescript'], // 지원할 언어 목록
          themes: ['nord', 'vitesse-dark'], // Use an array of theme names
        });
        const highlightedCode = highlighter.codeToHtml(codeString, {
          lang: language,
          themes: {
            light: 'vitesse-dark',
            dark: 'vitesse-dark',
          }
         // Use an array of theme names
        });
        setFormattedCode(highlightedCode);
      } catch (error) {
        console.error("Error loading highlighter:", error);
        setFormattedCode(null);
      }
    };

    loadHighlighter();
  }, [codeString, language]);

  return (
    <div className="relative">
      <div
        className="pl-4 mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
        dangerouslySetInnerHTML={{ __html: formattedCode || '' }}
      />
    </div>
  );
};

export default CodeBlock;