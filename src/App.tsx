import { Box, Button, Card, CardBody, Checkbox, CheckboxGroup, Container, Divider, Flex, Heading, Image, SimpleGrid, Spacer, Stack, Textarea, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { GameState, getCompletedState, getDefaultGameState } from './state';
import { Password, generatePassword } from './password';
import { useClipboard } from '@chakra-ui/react';
import { Footer } from './Footer';

const App = () => {
  const [gs, setGS] = useState<GameState>(getDefaultGameState());
  const password = generatePassword(gs);
  const { onCopy, hasCopied } = useClipboard(ToString(password));
  const toast = useToast();

  return (
    <Box minH="100vh">
      <Container maxW="6xl" p={4}>
        <Spacer h={2} />
        <Flex>
          <Heading size="md">ロックマンX パスワードジェネレータ</Heading>
          <Spacer />
          <Flex columnGap={2} mt="-7px" display={{ base: 'none', lg: 'flex' }}>
            <Button colorScheme="blue" onClick={() => setGS(getCompletedState())}>
              全部盛り
            </Button>
            <Button colorScheme="blue" onClick={() => setGS(getDefaultGameState())}>
              リセット
            </Button>
          </Flex>
        </Flex>
        <Spacer h={4} />

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={4}>
          <Card>
            <CardBody>
              <Flex>
                <Image src="/mmxpg/boss/armored_armadillo.webp" h="1rem" mt="1px" mr="4px" />
                <Heading size="sm">アーマー・アルマージ</Heading>
              </Flex>
              <Spacer h={2} />
              <CheckboxGroup colorScheme="blue" defaultValue={[]}>
                <Stack spacing={[1, 5]} direction={['column', 'row']}>
                  <Checkbox isChecked={gs.armadillo.defeated} onChange={(e) => setGS(updateGameState(gs, 'armadillo', 'defeated', e.target.checked))}>
                    撃破
                  </Checkbox>
                  <Checkbox isChecked={gs.armadillo.lifeup} onChange={(e) => setGS(updateGameState(gs, 'armadillo', 'lifeup', e.target.checked))}>
                    ライフアップ
                  </Checkbox>
                  <Checkbox isChecked={gs.armadillo.subtank} onChange={(e) => setGS(updateGameState(gs, 'armadillo', 'subtank', e.target.checked))}>
                    サブタンク
                  </Checkbox>
                </Stack>
              </CheckboxGroup>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <Flex>
                <Image src="/mmxpg/boss/launch_octopus.webp" h="1rem" mt="1px" mr="4px" />
                <Heading size="sm">ランチャー・オクトパルド</Heading>
              </Flex>
              <Spacer h={2} />
              <CheckboxGroup colorScheme="blue" defaultValue={[]}>
                <Stack spacing={[1, 5]} direction={['column', 'row']}>
                  <Checkbox isChecked={gs.octopus.defeated} onChange={(e) => setGS(updateGameState(gs, 'octopus', 'defeated', e.target.checked))}>
                    撃破
                  </Checkbox>
                  <Checkbox isChecked={gs.octopus.lifeup} onChange={(e) => setGS(updateGameState(gs, 'octopus', 'lifeup', e.target.checked))}>
                    ライフアップ
                  </Checkbox>
                </Stack>
              </CheckboxGroup>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <Flex>
                <Image src="/mmxpg/boss/chill_penguin.webp" h="1rem" mt="1px" mr="4px" />
                <Heading size="sm">アイシー・ペンギーゴ</Heading>
              </Flex>
              <Spacer h={2} />
              <CheckboxGroup colorScheme="blue" defaultValue={[]}>
                <Stack spacing={[1, 5]} direction={['column', 'row']}>
                  <Checkbox isChecked={gs.penguin.defeated} onChange={(e) => setGS(updateGameState(gs, 'penguin', 'defeated', e.target.checked))}>
                    撃破
                  </Checkbox>
                  <Checkbox isChecked={gs.penguin.lifeup} onChange={(e) => setGS(updateGameState(gs, 'penguin', 'lifeup', e.target.checked))}>
                    ライフアップ
                  </Checkbox>
                  <Checkbox isChecked={gs.penguin.leg} onChange={(e) => setGS(updateGameState(gs, 'penguin', 'leg', e.target.checked))}>
                    フットパーツ
                  </Checkbox>
                </Stack>
              </CheckboxGroup>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <Flex>
                <Image src="/mmxpg/boss/flame_mammoth.webp" h="1rem" mt="1px" mr="4px" />
                <Heading size="sm">バーニン・ナウマンダー</Heading>
              </Flex>
              <Spacer h={2} />
              <CheckboxGroup colorScheme="blue" defaultValue={[]}>
                <Stack spacing={[1, 5]} direction={['column', 'row']}>
                  <Checkbox isChecked={gs.mammoth.defeated} onChange={(e) => setGS(updateGameState(gs, 'mammoth', 'defeated', e.target.checked))}>
                    撃破
                  </Checkbox>
                  <Checkbox isChecked={gs.mammoth.lifeup} onChange={(e) => setGS(updateGameState(gs, 'mammoth', 'lifeup', e.target.checked))}>
                    ライフアップ
                  </Checkbox>
                  <Checkbox isChecked={gs.mammoth.subtank} onChange={(e) => setGS(updateGameState(gs, 'mammoth', 'subtank', e.target.checked))}>
                    サブタンク
                  </Checkbox>
                  <Checkbox isChecked={gs.mammoth.arm} onChange={(e) => setGS(updateGameState(gs, 'mammoth', 'arm', e.target.checked))}>
                    アームパーツ
                  </Checkbox>
                </Stack>
              </CheckboxGroup>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <Flex>
                <Image src="/mmxpg/boss/storm_eagle.webp" h="1rem" mt="1px" mr="4px" />
                <Heading size="sm">ストーム・イーグリード</Heading>
              </Flex>
              <Spacer h={2} />
              <CheckboxGroup colorScheme="blue" defaultValue={[]}>
                <Stack spacing={[1, 5]} direction={['column', 'row']}>
                  <Checkbox isChecked={gs.eagle.defeated} onChange={(e) => setGS(updateGameState(gs, 'eagle', 'defeated', e.target.checked))}>
                    撃破
                  </Checkbox>
                  <Checkbox isChecked={gs.eagle.lifeup} onChange={(e) => setGS(updateGameState(gs, 'eagle', 'lifeup', e.target.checked))}>
                    ライフアップ
                  </Checkbox>
                  <Checkbox isChecked={gs.eagle.subtank} onChange={(e) => setGS(updateGameState(gs, 'eagle', 'subtank', e.target.checked))}>
                    サブタンク
                  </Checkbox>
                  <Checkbox isChecked={gs.eagle.head} onChange={(e) => setGS(updateGameState(gs, 'eagle', 'head', e.target.checked))}>
                    ヘッドパーツ
                  </Checkbox>
                </Stack>
              </CheckboxGroup>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <Flex>
                <Image src="/mmxpg/boss/spark_mandrill.webp" h="1rem" mt="1px" mr="4px" />
                <Heading size="sm">スパーク・マンドリラー</Heading>
              </Flex>
              <Spacer h={2} />
              <CheckboxGroup colorScheme="blue" defaultValue={[]}>
                <Stack spacing={[1, 5]} direction={['column', 'row']}>
                  <Checkbox isChecked={gs.mandrill.defeated} onChange={(e) => setGS(updateGameState(gs, 'mandrill', 'defeated', e.target.checked))}>
                    撃破
                  </Checkbox>
                  <Checkbox isChecked={gs.mandrill.lifeup} onChange={(e) => setGS(updateGameState(gs, 'mandrill', 'lifeup', e.target.checked))}>
                    ライフアップ
                  </Checkbox>
                  <Checkbox isChecked={gs.mandrill.subtank} onChange={(e) => setGS(updateGameState(gs, 'mandrill', 'subtank', e.target.checked))}>
                    サブタンク
                  </Checkbox>
                </Stack>
              </CheckboxGroup>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <Flex>
                <Image src="/mmxpg/boss/sting_chameleon.webp" h="1rem" mt="1px" mr="4px" />
                <Heading size="sm">スティング・カメリーオ</Heading>
              </Flex>
              <Spacer h={2} />
              <CheckboxGroup colorScheme="blue" defaultValue={[]}>
                <Stack spacing={[1, 5]} direction={['column', 'row']}>
                  <Checkbox isChecked={gs.chameleon.defeated} onChange={(e) => setGS(updateGameState(gs, 'chameleon', 'defeated', e.target.checked))}>
                    撃破
                  </Checkbox>
                  <Checkbox isChecked={gs.chameleon.lifeup} onChange={(e) => setGS(updateGameState(gs, 'chameleon', 'lifeup', e.target.checked))}>
                    ライフアップ
                  </Checkbox>
                  <Checkbox isChecked={gs.chameleon.armor} onChange={(e) => setGS(updateGameState(gs, 'chameleon', 'armor', e.target.checked))}>
                    アーマー
                  </Checkbox>
                </Stack>
              </CheckboxGroup>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <Flex>
                <Image src="/mmxpg/boss/boomer_kuwanger.webp" h="1rem" mt="1px" mr="4px" />
                <Heading size="sm">ブーメル・クワンガー</Heading>
              </Flex>
              <Spacer h={2} />
              <CheckboxGroup colorScheme="blue" defaultValue={[]}>
                <Stack spacing={[1, 5]} direction={['column', 'row']}>
                  <Checkbox isChecked={gs.kuwanger.defeated} onChange={(e) => setGS(updateGameState(gs, 'kuwanger', 'defeated', e.target.checked))}>
                    撃破
                  </Checkbox>
                  <Checkbox isChecked={gs.kuwanger.lifeup} onChange={(e) => setGS(updateGameState(gs, 'kuwanger', 'lifeup', e.target.checked))}>
                    ライフアップ
                  </Checkbox>
                </Stack>
              </CheckboxGroup>
            </CardBody>
          </Card>
        </SimpleGrid>

        <Divider m={4} />

        <Card>
          <CardBody>
            <Flex>
              <Image src="/mmxpg/password.webp" h="1rem" mt="1px" mr="4px" />
              <Heading size="sm">パスワード</Heading>
            </Flex>
            <Spacer h={2} />
            <Textarea value={ToString(password)} size="sm" isReadOnly />
            <Spacer h={2} />
            <Button w="100%" colorScheme="blue" onClick={onCopy}>
              コピー
            </Button>
          </CardBody>
        </Card>
      </Container>

      <Box>
        {hasCopied && !toast.isActive('copied') && (
          <Box>
            {toast({
              id: 'copied',
              title: 'コピーされました！',
              duration: 2000,
              status: 'success',
            })}
          </Box>
        )}
      </Box>

      <Spacer h={2} />
      <Footer />
      <Spacer h={6} />
    </Box>
  );
};

const updateGameState = (gs: GameState, boss: keyof GameState, key: string, value: boolean): GameState => {
  const state = { ...gs };
  if (key in state[boss]) {
    (state[boss] as Record<string, boolean>)[key] = value;
  }
  return state;
};

const ToString = (pw: Password): string => {
  return `${pw.A} ${pw.B} ${pw.C} ${pw.D}
${pw.E} ${pw.F} ${pw.G} ${pw.H}
${pw.I} ${pw.J} ${pw.K} ${pw.L}`;
};

export default App;
