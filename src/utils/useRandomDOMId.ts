import { nanoid } from 'nanoid';
import { useState } from 'react';

export default function useRandomDOMId(prefix: string): string {
  const [dialogId] = useState(`${prefix}-${nanoid(12)}`);
  return dialogId;
}
