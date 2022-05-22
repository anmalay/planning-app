import { useEffect, useState } from 'react';

export default function useBodyModal(visible: boolean): boolean {
  useEffect(() => {
    document.body.classList.toggle('has-modal', visible);

    return () => {
      document.body.classList.toggle('has-modal', false);
    };
  }, [visible]);

  return visible;
}
