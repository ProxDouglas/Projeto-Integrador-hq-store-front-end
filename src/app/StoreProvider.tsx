'use client';
import { Provider } from 'react-redux';
import { useRef } from 'react';
import { AppStore, makeStore } from '@/store/store';

export default function StoreProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    storeRef.current = makeStore();
    // storeRef.current.dispatch(loadAppInfo());
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
