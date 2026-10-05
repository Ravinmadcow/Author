export type Book = {
  slug: string;
  title: string;
  cover: string;
  width: number;
  height: number;
  blurb?: string;
  buyUrl?: string;
};

// The covers are temporary crops from the banner. Replace the files in
// public/images/ with full-size covers (and update width/height to match).
// Fill in blurb and buyUrl for each book; the page shows them once set.
// A blank line in a blurb starts a new paragraph.
export const books: Book[] = [
  {
    slug: "reasons-to-live",
    title: "Reasons to Live",
    cover: "/images/reasons-to-live.png",
    width: 308,
    height: 410,
    blurb: `This mission might be her hardest yet.

Haunted by nightmares, doubts, and hints of depression and PTSD that she keeps denying, Christine decides to embark on the riskiest journey of her life so far: the one that ends with meeting her birth father.

Despite her mother’s pleas to reconsider, she jumps on a plane to America, gets a room at a cheap motel and tries to work up the courage to approach the man who created her.

The man who still has no idea she exists.

Meeting him could fill the void that loss and grief have carved in her heart or make her depression spiral further, until it consumes what’s left of Christine.

Will she finally acknowledge her true feelings and get the help she desperately needs, or is it too late to mend old wounds?

Maybe the veteran she just met at the motel is right.

Christine might be a fighter, but a good fighter knows when it’s time to let go…`,
    buyUrl: "",
  },
  {
    slug: "seer-of-prophecy",
    title: "Seer of Prophecy",
    cover: "/images/seer-of-prophecy.png",
    width: 303,
    height: 354,
    blurb: `Stonehelm is the only home Seraphina has ever known.

Working as a seer in her humble village, she spends her days reassuring people about their future and her nights reading about the legendary civilisation that inhabited this land before them — the mighty Ascendians.

Unlike her friend, Ana, she does not dream of travelling. She is too anxious for adventure, too obsessed with her research to explore the real world, and too proud to admit how much she wishes she had her friend’s courage. Until an unexpected vision makes her question everything she thought she knew about her world.

If dragons disappeared nine hundred years ago, as they were supposed to, how could her vision ever come true?

The answer comes in the form of a suspicious client, a lying goblin who tricks her into opening a secret portal and allowing hordes of goblins to march through and plunder their way to Stonehelm…

Attracted by Seraphina’s newfound powers, three dragons, Frostbite, Ember, and Stormrider, sneak through the portal to find her and put an end to the goblins’ undying thirst for power. In order to stop the goblins, humans and dragons must form an unprecedented alliance and win a battle that has been secretly raging for centuries.

The key to their success? Seraphina herself…`,
    buyUrl: "",
  },
  {
    slug: "how-do-soldiers-cry",
    title: "How Do Soldiers Cry",
    cover: "/images/how-do-soldiers-cry.png",
    width: 293,
    height: 354,
    blurb: `The war at home is harder to win.

When her father is killed tragically in Afghanistan, 17-year-old Christine finds herself deserted in her own family. Devastated by grief and unable to form a real connection with her mother, she decides to take the only path she knows: the one her father forged in the army.

Christine’s mother does not support her decision to become an army medic, but that is hardly the only problem Christine is facing. Shy and reserved by nature, she has a difficult time bonding with her comrades, including the only other female soldier in her squadron.

As Christine struggles with social anxiety and her faith in God, she embarks on a mission to uncover the circumstances of her father’s heroic death.`,
    buyUrl: "",
  },
  {
    slug: "one-way-ticket",
    title: "One Way Ticket",
    cover: "/images/one-way-ticket.png",
    width: 304,
    height: 410,
    blurb: `There’s no fight like the one inside.

Christine discovers this the hard way right after her passing out parade, when her estranged mother Isabelle gives her a mysterious letter.

Despite her burning need to know the truth about her past, Christine refuses to read it.

Instead, she immerses herself in her combat medic training and forms a strong bond with Andi, a quick-witted female medic with way more life experiences than Christine herself.

Passing her medic’s exam and reuniting with her squadron, including Ben, makes Christine feel useful again, but her grandmother’s illness and their long-distance communication remain a thorn in her heart.

Will her deployment to Afghanistan help her gain a new perspective, or will it only shatter her glorified idea of fighting for her country?

As Christine struggles to come to terms with her mother’s new relationship, their broken connection, and a devastating loss, she finally makes the decision to read that fateful letter, only to have her world turned upside down once again…

Has her entire life been a lie fabricated to protect her?

By the time this war is over, Christine will find out what she’s lost and won.`,
    buyUrl: "",
  },
];
