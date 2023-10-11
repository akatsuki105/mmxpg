type Stage = {
  defeated: boolean;
  lifeup: boolean;
};

type Armadillo = Stage & {
  subtank: boolean;
};

type Penguin = Stage & {
  leg: boolean;
};

type Mammoth = Stage & {
  subtank: boolean;
  arm: boolean;
};

type Eagle = Stage & {
  subtank: boolean;
  head: boolean;
};

type Mandrill = Stage & {
  subtank: boolean;
};

type Chameleon = Stage & {
  armor: boolean;
};

export type GameState = {
  armadillo: Armadillo;
  octopus: Stage;
  penguin: Penguin;
  mammoth: Mammoth;
  eagle: Eagle;
  mandrill: Mandrill;
  chameleon: Chameleon;
  kuwanger: Stage;
};

export const getDefaultGameState = (): GameState => {
  const getDefaultStageState = (): Stage => {
    return {
      defeated: false,
      lifeup: false,
    };
  };

  return {
    armadillo: {
      ...getDefaultStageState(),
      subtank: false,
    },
    octopus: getDefaultStageState(),
    penguin: {
      ...getDefaultStageState(),
      leg: false,
    },
    mammoth: {
      ...getDefaultStageState(),
      subtank: false,
      arm: false,
    },
    eagle: {
      ...getDefaultStageState(),
      subtank: false,
      head: false,
    },
    mandrill: {
      ...getDefaultStageState(),
      subtank: false,
    },
    chameleon: {
      ...getDefaultStageState(),
      armor: false,
    },
    kuwanger: getDefaultStageState(),
  };
};

export const getCompletedState = (): GameState => {
  const getCompletedStageState = (): Stage => {
    return {
      defeated: true,
      lifeup: true,
    };
  };

  return {
    armadillo: {
      ...getCompletedStageState(),
      subtank: true,
    },
    octopus: getCompletedStageState(),
    penguin: {
      ...getCompletedStageState(),
      leg: true,
    },
    mammoth: {
      ...getCompletedStageState(),
      subtank: true,
      arm: true,
    },
    eagle: {
      ...getCompletedStageState(),
      subtank: true,
      head: true,
    },
    mandrill: {
      ...getCompletedStageState(),
      subtank: true,
    },
    chameleon: {
      ...getCompletedStageState(),
      armor: true,
    },
    kuwanger: getCompletedStageState(),
  };
};
