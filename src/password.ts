import { GameState } from './state';

type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

/*
  A B C D
  E F G H
  I J K L
*/
export type Password = {
  // first row
  A: Digit;
  B: Digit;
  C: Digit;
  D: Digit;

  // second row
  E: Digit;
  F: Digit;
  G: Digit;
  H: Digit;

  // third row
  I: Digit;
  J: Digit;
  K: Digit;
  L: Digit;
}; // 12 digits

const defaultPassword = (): Password => {
  return {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    F: 0,
    G: 0,
    H: 0,
    I: 0,
    J: 0,
    K: 0,
    L: 0,
  };
};

const n = (b: boolean): 0 | 1 => (b ? 1 : 0);

export const generatePassword = (s: GameState): Password => {
  const pw = defaultPassword();

  {
    // A
    let pair: [Digit, Digit] = [4, 1];
    const m = n(s.penguin.defeated) + n(s.mammoth.defeated) + n(s.octopus.lifeup) + n(s.chameleon.lifeup) + n(s.mandrill.subtank) + n(s.eagle.subtank) + n(s.eagle.head) + n(s.chameleon.armor) + n(s.mammoth.arm);
    const x = s.penguin.lifeup;
    const y = s.armadillo.subtank;
    if (x) {
      pair = [2, 7];
    }
    if (y) {
      pair = [6, 5];
    }
    if (x && y) {
      pair = [8, 3];
    }
    pw.A = pair[m % 2];
  }
  {
    // B
    let pair: [Digit, Digit] = [3, 2];
    const m = n(s.armadillo.lifeup) + n(s.kuwanger.lifeup) + n(s.penguin.lifeup) + n(s.mammoth.lifeup) + n(s.octopus.lifeup) + n(s.mandrill.lifeup) + n(s.chameleon.lifeup) + n(s.eagle.lifeup);
    const x = s.mammoth.defeated;
    const y = s.eagle.head;
    if (x) {
      pair = [7, 8];
    }
    if (y) {
      pair = [4, 1];
    }
    if (x && y) {
      pair = [6, 5];
    }
    pw.B = pair[m % 2];
  }
  {
    // C
    let val: Digit = 2;
    const x = s.mammoth.lifeup;
    const y = s.mammoth.subtank;
    if (x) {
      val = 4;
    }
    if (y) {
      val = 6;
    }
    if (x && y) {
      val = 7;
    }
    pw.C = val;
  }
  {
    // D
    let val: Digit = 5;
    const x = s.eagle.defeated;
    const y = s.eagle.lifeup;
    if (x) {
      val = 3;
    }
    if (y) {
      val = 2;
    }
    if (x && y) {
      val = 6;
    }
    pw.D = val;
  }
  {
    // E
    let pair: [Digit, Digit] = [5, 7];
    const m = n(s.armadillo.defeated) + n(s.kuwanger.defeated) + n(s.penguin.defeated) + n(s.mammoth.defeated) + n(s.eagle.defeated) + n(s.armadillo.lifeup) + n(s.kuwanger.lifeup) + n(s.armadillo.subtank) + n(s.mammoth.arm);
    const x = s.octopus.defeated;
    const y = s.chameleon.armor;
    if (x) {
      pair = [3, 2];
    }
    if (y) {
      pair = [1, 8];
    }
    if (x && y) {
      pair = [6, 4];
    }
    pw.E = pair[m % 2];
  }
  {
    // F
    let pair: [Digit, Digit] = [8, 2];
    const m = n(s.armadillo.subtank) + n(s.mammoth.subtank) + n(s.mandrill.subtank) + n(s.eagle.subtank) + n(s.eagle.head) + n(s.chameleon.armor) + n(s.mammoth.arm) + n(s.penguin.leg);
    const x = s.kuwanger.defeated;
    const y = s.kuwanger.lifeup;
    if (x) {
      pair = [4, 7];
    }
    if (y) {
      pair = [1, 3];
    }
    if (x && y) {
      pair = [6, 5];
    }
    pw.F = pair[m % 2];
  }
  {
    // G
    let pair: [Digit, Digit] = [5, 4];
    const m = n(s.octopus.defeated) + n(s.eagle.defeated) + n(s.penguin.lifeup) + n(s.mammoth.lifeup) + n(s.eagle.subtank) + n(s.eagle.head);
    const x = s.armadillo.defeated;
    const y = s.mammoth.arm;
    if (x) {
      pair = [8, 1];
    }
    if (y) {
      pair = [3, 7];
    }
    if (x && y) {
      pair = [6, 2];
    }
    pw.G = pair[m % 2];
  }
  {
    // H
    let val: Digit = 2;
    const x = s.mandrill.defeated;
    const y = s.chameleon.lifeup;
    if (x) {
      val = 6;
    }
    if (y) {
      val = 8;
    }
    if (x && y) {
      val = 7;
    }
    pw.H = val;
  }
  {
    // I
    let pair: [Digit, Digit] = [1, 8];
    const m = n(s.armadillo.defeated) + n(s.kuwanger.defeated) + n(s.kuwanger.lifeup) + n(s.penguin.lifeup) + n(s.mammoth.lifeup) + n(s.octopus.lifeup) + n(s.chameleon.lifeup) + n(s.mandrill.subtank) + n(s.chameleon.armor);
    const x = s.armadillo.lifeup;
    const y = s.penguin.leg;
    if (x) {
      pair = [4, 6];
    }
    if (y) {
      pair = [3, 7];
    }
    if (x && y) {
      pair = [2, 5];
    }
    pw.I = pair[m % 2];
  }
  {
    // J
    let val: Digit = 8;
    const x = s.chameleon.defeated;
    const y = s.eagle.subtank;
    if (x) {
      val = 3;
    }
    if (y) {
      val = 2;
    }
    if (x && y) {
      val = 1;
    }
    pw.J = val;
  }
  {
    // K
    let pair: [Digit, Digit] = [2, 6];
    const m = n(s.armadillo.defeated) + n(s.kuwanger.defeated) + n(s.penguin.defeated) + n(s.mammoth.defeated) + n(s.octopus.defeated) + n(s.mandrill.defeated) + n(s.chameleon.defeated) + n(s.eagle.defeated);
    const x = s.octopus.lifeup;
    const y = s.mandrill.subtank;
    if (x) {
      pair = [8, 7];
    }
    if (y) {
      pair = [5, 3];
    }
    if (x && y) {
      pair = [4, 1];
    }
    pw.K = pair[m % 2];
  }
  {
    // L
    let val: Digit = 1;
    const x = s.penguin.defeated;
    const y = s.mandrill.lifeup;
    if (x) {
      val = 4;
    }
    if (y) {
      val = 6;
    }
    if (x && y) {
      val = 8;
    }
    pw.L = val;
  }

  return pw;
};
