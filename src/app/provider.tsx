"use client";

import type { ReactNode } from "react";
import { Provider } from "@react-spectrum/s2/Provider";
import { useRouter } from "next/navigation";

// Configure the type of the 'routerOptions' prop on all React Spectrum components.
declare module '@react-spectrum/s2/Provider' {
  interface RouterConfig {
    routerOptions: NonNullable<Parameters<ReturnType<typeof useRouter>['push']>[1]>;
  }
}

export function ClientProvider({ lang, children }: { lang: string; children?: ReactNode }) {
  const router = useRouter();

  return (
    <Provider
      elementType="html"
      background="base"
      locale={lang}
      router={{
        navigate: (path, _options) => {
          router.push(path, _options);
        },
        useHref: (href) => href.toString(),
      }}
    >
      {children}
    </Provider>
  );
}