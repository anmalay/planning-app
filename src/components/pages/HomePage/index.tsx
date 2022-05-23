import { forwardRef, useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import { Box, Text } from 'src/common';
import { withProfile } from 'src/utils';

interface ItemType {
  id: number;
  name: string;
}

export function HomePage(): JSX.Element {
  const [state, setState] = useState<ItemType[]>([
    { id: 1, name: 'shrek' },
    { id: 2, name: 'fiona' },
    { id: 3, name: 'osel' },
    { id: 4, name: 'drakon' },
    { id: 5, name: 'pr9n9' },
    { id: 6, name: 'pinokio' },
  ]);

  return (
    <>
      <Box>HELLO MY FRIEND</Box>
      <Box>WLCOME</Box>

      <Box width="100%" justifyContent="center" flexDirection="row">
        <Box flexDirection="column" styles={{ border: '2px solid grey' }}>
          <Text variant="heading4">FILM SHREK</Text>
          <ReactSortable list={state} setList={setState}>
            {state.map((item) => (
              <Box key={item.id}>
                <Text>{item.name}</Text>
              </Box>
            ))}
          </ReactSortable>
        </Box>
      </Box>
    </>
  );
}
export const getServerSideProps = withProfile(
  (profile) => ({
    props: {
      profile,
      isDev: process.env.IS_DEV === 'true',
      baseUrl: process.env.FRONTEND_ADDRESS || '',
    },
  }),
  { onlyWithSession: true },
);
