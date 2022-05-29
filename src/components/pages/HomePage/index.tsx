import { Dispatch, forwardRef, SetStateAction, useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import { Box, Text } from 'src/common';
import { withProfile } from 'src/utils';

interface IData {
  id: string;
  name: string;
  tasks?: ITasks[];
}

interface ITasks {
  id: string;
  name: string;
  tasks?: ITasks[];
}

const sortableOptions = {
  animation: 150,
  fallbackOnBody: true,
  swapThreshold: 0.65,
  ghostClass: 'ghost',
  group: 'shared',
};

const data: IData[] = [
  {
    id: '1',
    name: 'KOLYA',
    tasks: [
      { id: '1', name: '1 task' },
      { id: '2', name: '2 task' },
      { id: '3', name: '3 task' },
      { id: '4', name: '4 task' },
      { id: '5', name: '5 task' },
      { id: '6', name: '6 task' },
    ],
  },
  {
    id: '2',
    name: 'VITYA',
    tasks: [
      { id: '1', name: '11 task' },
      { id: '2', name: '22 task' },
      { id: '3', name: '33 task' },
      { id: '4', name: '44 tassssssssssk' },
      { id: '5', name: '55 task' },
      { id: '6', name: '66 task' },
    ],
  },
  {
    id: '3',
    name: 'PETYA',
    tasks: [
      { id: '1', name: '111 task' },
      { id: '2', name: '222 task' },
      { id: '3', name: '333 task' },
      { id: '4', name: '444 task' },
      { id: '5', name: '555 task' },
      { id: '6', name: '666 task' },
    ],
  },
];

export function HomePage(): JSX.Element {
  const [blocks, setBlocks] = useState<IData[]>(data);

  return (
    <>
      <Box>HELLO MY FRIEND</Box>
      <Box>WLCOME</Box>

      <Box width="100%" justifyContent="center" flexDirection="row">
        <Box
          flexDirection="column"
          styles={{
            border: '1px solid var(--color-background-gray-300)',
            borderRadius: '2px',
            backgroundColor: 'var(--color-button-text-default)',
            padding: '28px',
          }}
        >
          <Text variant="heading4">TABLE</Text>

          <Box flexDirection="row" gap={2}>
            <ReactSortable
              list={blocks}
              setList={setBlocks}
              {...sortableOptions}
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '2px',
              }}
            >
              {blocks.map((block, blockIndex) => (
                <BlockWrapper
                  key={block.id}
                  block={block}
                  blockIndex={[blockIndex]}
                  setBlocks={setBlocks}
                />
              ))}
            </ReactSortable>
            <Box
              styles={{
                display: 'flex',
                flexDirection: 'row',
                gap: '2px',
                border: '1px solid var(--color-background-gray-300)',
                height: 'fit-content',
                cursor: 'pointer',
                justifyContent: 'center',
                padding: '8px',
              }}
            >
              +
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

function BlockWrapper({
  block,
  blockIndex,
  setBlocks,
}: {
  block: IData;
  blockIndex: number[];
  setBlocks: Dispatch<SetStateAction<IData[]>>;
}) {
  // console.log(block);
  if (!block) return null;
  if (block?.tasks?.length) {
    return (
      <Box flexDirection="column" justifyContent="flexStart" alignItems="center">
        <Box
          styles={{
            backgroundColor: 'var(--color-background-gray-200)',
            width: '100%',
            justifyContent: 'center',
            padding: '8px',
          }}
        >
          {block.name}
        </Box>
        <Container block={block} setBlocks={setBlocks} blockIndex={blockIndex} />
      </Box>
    );
  }
  return (
    <Box styles={{ padding: '12px', border: '1px solid var(--color-background-gray-300)' }}>
      {block.name}
    </Box>
  );
}

function Container({
  block,
  blockIndex,
  setBlocks,
}: {
  block: IData;
  blockIndex: number[];
  setBlocks: Dispatch<SetStateAction<IData[]>>;
}) {
  return (
    <ReactSortable
      key={block.id}
      list={block.tasks}
      setList={(currentList) => {
        setBlocks((sourceList) => {
          const tempList = [...sourceList];

          const newBlockIndex = [...blockIndex];
          const lastIndex = newBlockIndex.pop();
          const lastArr = newBlockIndex.reduce((arr, i) => arr[i].tasks, tempList);

          lastArr[lastIndex].tasks = currentList;

          return tempList;
        });
      }}
      {...sortableOptions}
    >
      {block.tasks &&
        block.tasks.map((childBlock, index) => (
          <BlockWrapper
            key={childBlock.id}
            block={childBlock}
            blockIndex={[...blockIndex, index]}
            setBlocks={setBlocks}
          />
        ))}
    </ReactSortable>
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
