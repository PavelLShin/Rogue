// карта
const map = [
  [-26, -25.5, false],
  [-26, 0, false],
  [-26, 25.5, false],
  [-26, 51, false],
  [-26, 76.5, false],
  [-26, 1 - 262, false],
  [-26, 127.5, false],
  [-26, 153, false],
  [-26, 178.5, false],
  [-26, 2 - 264, false],
  [-26, 229.5, false],
  [-26, 255, false],
  [-26, 28 - 26.5, false],
  [-26, 3 - 266, false],
  [-26, 331.5, false],
  [-26, 357, false],
  [-26, 382.5, false],
  [-26, 4 - 268, false],
  [-26, 433.5, false],
  [-26, 459, false],
  [-26, 484.5, false],
  [-26, 51 - 26, false],
  [-26, 535.5, false],
  [-26, 561, false],
  [-26, 586.5, false],
  [-26, 612, false],
  [-26, 637.5, false],
  [-26, 663, false],
  [-26, 688.5, false],
  [-26, 714, false],
  [-26, 739.5, false],
  [-26, 765, false],
  [-26, 79 - 26.5, false],
  [-26, 816, false],
  [-26, 841.5, false],
  [-26, 867, false],
  [-26, 892.5, false],
  [-26, 918, false],
  [-26, 943.5, false],
  [-26, 969, false],
  [-26, 994.5, false],
  [-26, 1020, false],

  [0, -25.5, false],
  [0, 0, false],
  [0, 25.5, false],
  [0, 51, true],
  [0, 76.5, false],
  [0, 102, false],
  [0, 127.5, false],
  [0, 153, false],
  [0, 178.5, false],
  [0, 204, false],
  [0, 229.5, false],
  [0, 255, true],
  [0, 280.5, false],
  [0, 306, false],
  [0, 331.5, false],
  [0, 357, false],
  [0, 382.5, false],
  [0, 408, false],
  [0, 433.5, false],
  [0, 459, false],
  [0, 484.5, false],
  [0, 510, false],
  [0, 535.5, false],
  [0, 561, true],
  [0, 586.5, true],
  [0, 612, true],
  [0, 637.5, true],
  [0, 663, false],
  [0, 688.5, false],
  [0, 714, false],
  [0, 739.5, true],
  [0, 765, false],
  [0, 790.5, false],
  [0, 816, false],
  [0, 841.5, false],
  [0, 867, false],
  [0, 892.5, true],
  [0, 918, false],
  [0, 943.5, false],
  [0, 969, false],
  [0, 994.5, false],
  [0, 1020, false],

  [26, -25.5, false],
  [26, 0, false],
  [26, 25.5, false],
  [26, 51, true],
  [26, 76.5, false],
  [26, 102, false],
  [26, 127.5, false],
  [26, 153, false],
  [26, 178.5, false],
  [26, 204, false],
  [26, 229.5, false],
  [26, 255, true],
  [26, 280.5, false],
  [26, 306, false],
  [26, 331.5, false],
  [26, 357, false],
  [26, 382.5, false],
  [26, 408, false],
  [26, 433.5, false],
  [26, 459, false],
  [26, 484.5, false],
  [26, 510, false],
  [26, 535.5, false],
  [26, 561, true],
  [26, 586.5, true],
  [26, 612, true],
  [26, 637.5, true],
  [26, 663, false],
  [26, 688.5, false],
  [26, 714, false],
  [26, 739.5, true],
  [26, 765, false],
  [26, 790.5, false],
  [26, 816, false],
  [26, 841.5, false],
  [26, 867, false],
  [26, 892.5, true],
  [26, 918, false],
  [26, 943.5, false],
  [26, 969, false],
  [26, 994.5, false],
  [26, 1020, false],

  [52, -25.5, false],
  [52, 0, false],
  [52, 25.5, false],
  [52, 51, true],
  [52, 76.5, false],
  [52, 102, false],
  [52, 127.5, false],
  [52, 153, false],
  [52, 178.5, false],
  [52, 204, false],
  [52, 229.5, false],
  [52, 255, true],
  [52, 280.5, false],
  [52, 306, false],
  [52, 331.5, false],
  [52, 357, false],
  [52, 382.5, false],
  [52, 408, false],
  [52, 433.5, false],
  [52, 459, false],
  [52, 484.5, false],
  [52, 510, false],
  [52, 535.5, false],
  [52, 561, true],
  [52, 586.5, false],
  [52, 612, false],
  [52, 637.5, false],
  [52, 663, false],
  [52, 688.5, false],
  [52, 714, false],
  [52, 739.5, true],
  [52, 765, false],
  [52, 790.5, false],
  [52, 816, false],
  [52, 841.5, false],
  [52, 867, false],
  [52, 892.5, true],
  [52, 918, false],
  [52, 943.5, false],
  [52, 969, false],
  [52, 994.5, false],
  [52, 1020, false],

  [78, -25.5, false],
  [78, 0, false],
  [78, 25.5, false],
  [78, 51, true],
  [78, 76.5, false],
  [78, 102, false],
  [78, 127.5, false],
  [78, 153, false],
  [78, 178.5, false],
  [78, 204, false],
  [78, 229.5, false],
  [78, 255, true],
  [78, 280.5, false],
  [78, 306, false],
  [78, 331.5, true],
  [78, 357, true],
  [78, 382.5, true],
  [78, 408, true],
  [78, 433.5, true],
  [78, 459, true],
  [78, 484.5, true],
  [78, 510, false],
  [78, 535.5, false],
  [78, 561, true],
  [78, 586.5, false],
  [78, 612, false],
  [78, 637.5, false],
  [78, 663, false],
  [78, 688.5, false],
  [78, 714, false],
  [78, 739.5, true],
  [78, 765, false],
  [78, 790.5, true],
  [78, 816, true],
  [78, 841.5, true],
  [78, 867, false],
  [78, 892.5, true],
  [78, 918, false],
  [78, 943.5, false],
  [78, 969, false],
  [78, 994.5, false],
  [78, 1020, false],

  [104, -25.5, false],
  [104, 0, false],
  [104, 25.5, false],
  [104, 51, true],
  [104, 76.5, true],
  [104, 102, true],
  [104, 127.5, true],
  [104, 153, true],
  [104, 178.5, true],
  [104, 204, true],
  [104, 229.5, true],
  [104, 255, true],
  [104, 280.5, true],
  [104, 306, true],
  [104, 331.5, true],
  [104, 357, true],
  [104, 382.5, true],
  [104, 408, true],
  [104, 433.5, true],
  [104, 459, true],
  [104, 484.5, true],
  [104, 510, true],
  [104, 535.5, true],
  [104, 561, true],
  [104, 586.5, true],
  [104, 612, true],
  [104, 637.5, true],
  [104, 663, true],
  [104, 688.5, true],
  [104, 714, true],
  [104, 739.5, true],
  [104, 765, true],
  [104, 790.5, true],
  [104, 816, true],
  [104, 841.5, true],
  [104, 867, true],
  [104, 892.5, true],
  [104, 918, true],
  [104, 943.5, true],
  [104, 969, true],
  [104, 994.5, true],
  [104, 1020, false],

  [130, -25.5, false],
  [130, 0, false],
  [130, 25.5, false],
  [130, 51, true],
  [130, 76.5, false],
  [130, 102, false],
  [130, 127.5, false],
  [130, 153, false],
  [130, 178.5, false],
  [130, 204, false],
  [130, 229.5, false],
  [130, 255, true],
  [130, 280.5, false],
  [130, 306, false],
  [130, 331.5, true],
  [130, 357, true],
  [130, 382.5, true],
  [130, 408, true],
  [130, 433.5, true],
  [130, 459, true],
  [130, 484.5, true],
  [130, 510, false],
  [130, 535.5, false],
  [130, 561, false],
  [130, 586.5, false],
  [130, 612, false],
  [130, 637.5, false],
  [130, 663, false],
  [130, 688.5, false],
  [130, 714, false],
  [130, 739.5, true],
  [130, 765, false],
  [130, 790.5, true],
  [130, 816, true],
  [130, 841.5, true],
  [130, 867, false],
  [130, 892.5, true],
  [130, 918, false],
  [130, 943.5, false],
  [130, 969, false],
  [130, 994.5, false],
  [130, 1020, false],

  [156, -25.5, false],
  [156, 0, false],
  [156, 25.5, false],
  [156, 51, true],
  [156, 76.5, false],
  [156, 102, false],
  [156, 127.5, false],
  [156, 153, false],
  [156, 178.5, false],
  [156, 204, false],
  [156, 229.5, false],
  [156, 255, true],
  [156, 280.5, false],
  [156, 306, false],
  [156, 331.5, false],
  [156, 357, false],
  [156, 382.5, false],
  [156, 408, true],
  [156, 433.5, false],
  [156, 459, false],
  [156, 484.5, false],
  [156, 510, false],
  [156, 535.5, false],
  [156, 561, false],
  [156, 586.5, false],
  [156, 612, false],
  [156, 637.5, false],
  [156, 663, false],
  [156, 688.5, false],
  [156, 714, false],
  [156, 739.5, true],
  [156, 765, false],
  [156, 790.5, false],
  [156, 816, false],
  [156, 841.5, false],
  [156, 867, false],
  [156, 892.5, true],
  [156, 918, false],
  [156, 943.5, false],
  [156, 969, false],
  [156, 994.5, false],
  [156, 1020, false],

  [182, -25.5, false],
  [182, 0, false],
  [182, 25.5, false],
  [182, 51, true],
  [182, 76.5, false],
  [182, 102, true],
  [182, 127.5, true],
  [182, 153, true],
  [182, 178.5, true],
  [182, 204, true],
  [182, 229.5, false],
  [182, 255, true],
  [182, 280.5, false],
  [182, 306, false],
  [182, 331.5, false],
  [182, 357, false],
  [182, 382.5, false],
  [182, 408, true],
  [182, 433.5, false],
  [182, 459, false],
  [182, 484.5, false],
  [182, 510, true],
  [182, 535.5, true],
  [182, 561, true],
  [182, 586.5, true],
  [182, 612, true],
  [182, 637.5, true],
  [182, 663, true],
  [182, 688.5, false],
  [182, 714, false],
  [182, 739.5, true],
  [182, 765, false],
  [182, 790.5, false],
  [182, 816, false],
  [182, 841.5, false],
  [182, 867, false],
  [182, 892.5, true],
  [182, 918, false],
  [182, 943.5, true],
  [182, 969, true],
  [182, 994.5, true],
  [182, 1020, false],

  [208, -25.5, false],
  [208, 0, true],
  [208, 25.5, true],
  [208, 51, true],
  [208, 76.5, true],
  [208, 102, true],
  [208, 127.5, true],
  [208, 153, true],
  [208, 178.5, true],
  [208, 204, true],
  [208, 229.5, true],
  [208, 255, true],
  [208, 280.5, true],
  [208, 306, true],
  [208, 331.5, true],
  [208, 357, true],
  [208, 382.5, true],
  [208, 408, true],
  [208, 433.5, true],
  [208, 459, true],
  [208, 484.5, true],
  [208, 510, true],
  [208, 535.5, true],
  [208, 561, true],
  [208, 586.5, true],
  [208, 612, true],
  [208, 637.5, true],
  [208, 663, true],
  [208, 688.5, true],
  [208, 714, true],
  [208, 739.5, true],
  [208, 765, true],
  [208, 790.5, true],
  [208, 816, true],
  [208, 841.5, true],
  [208, 867, true],
  [208, 892.5, true],
  [208, 918, true],
  [208, 943.5, true],
  [208, 969, true],
  [208, 994.5, true],
  [208, 1020, false],

  [234, -25.5, false],
  [234, 0, false],
  [234, 25.5, false],
  [234, 51, true],
  [234, 76.5, false],
  [234, 102, true],
  [234, 127.5, true],
  [234, 153, true],
  [234, 178.5, true],
  [234, 204, true],
  [234, 229.5, false],
  [234, 255, true],
  [234, 280.5, false],
  [234, 306, false],
  [234, 331.5, false],
  [234, 357, false],
  [234, 382.5, false],
  [234, 408, true],
  [234, 433.5, false],
  [234, 459, false],
  [234, 484.5, false],
  [234, 510, true],
  [234, 535.5, true],
  [234, 561, true],
  [234, 586.5, true],
  [234, 612, true],
  [234, 637.5, true],
  [234, 663, true],
  [234, 688.5, false],
  [234, 714, false],
  [234, 739.5, true],
  [234, 765, false],
  [234, 790.5, false],
  [234, 816, false],
  [234, 841.5, false],
  [234, 867, false],
  [234, 892.5, true],
  [234, 918, false],
  [234, 943.5, true],
  [234, 969, true],
  [234, 994.5, true],
  [234, 1020, false],

  [260, -25.5, false],
  [260, 0, false],
  [260, 25.5, false],
  [260, 51, true],
  [260, 76.5, false],
  [260, 102, false],
  [260, 127.5, false],
  [260, 153, false],
  [260, 178.5, false],
  [260, 204, false],
  [260, 229.5, false],
  [260, 255, true],
  [260, 280.5, false],
  [260, 306, false],
  [260, 331.5, false],
  [260, 357, false],
  [260, 382.5, false],
  [260, 408, true],
  [260, 433.5, false],
  [260, 459, false],
  [260, 484.5, false],
  [260, 510, false],
  [260, 535.5, false],
  [260, 561, false],
  [260, 586.5, false],
  [260, 612, false],
  [260, 637.5, false],
  [260, 663, false],
  [260, 688.5, false],
  [260, 714, false],
  [260, 739.5, true],
  [260, 765, false],
  [260, 790.5, false],
  [260, 816, false],
  [260, 841.5, false],
  [260, 867, false],
  [260, 892.5, true],
  [260, 918, false],
  [260, 943.5, false],
  [260, 969, false],
  [260, 994.5, false],
  [260, 1020, false],

  [286, -25.5, false],
  [286, 0, false],
  [286, 25.5, false],
  [286, 51, true],
  [286, 76.5, false],
  [286, 102, false],
  [286, 127.5, false],
  [286, 153, false],
  [286, 178.5, false],
  [286, 204, false],
  [286, 229.5, false],
  [286, 255, true],
  [286, 280.5, false],
  [286, 306, false],
  [286, 331.5, false],
  [286, 357, false],
  [286, 382.5, false],
  [286, 408, true],
  [286, 433.5, false],
  [286, 459, false],
  [286, 484.5, false],
  [286, 510, false],
  [286, 535.5, false],
  [286, 561, false],
  [286, 586.5, false],
  [286, 612, false],
  [286, 637.5, false],
  [286, 663, false],
  [286, 688.5, false],
  [286, 714, false],
  [286, 739.5, true],
  [286, 765, false],
  [286, 790.5, false],
  [286, 816, false],
  [286, 841.5, false],
  [286, 867, false],
  [286, 892.5, true],
  [286, 918, false],
  [286, 943.5, false],
  [286, 969, false],
  [286, 994.5, false],
  [286, 1020, false],

  [312, -25.5, false],
  [312, 0, false],
  [312, 25.5, false],
  [312, 51, true],
  [312, 76.5, false],
  [312, 102, false],
  [312, 127.5, false],
  [312, 153, false],
  [312, 178.5, false],
  [312, 204, false],
  [312, 229.5, false],
  [312, 255, true],
  [312, 280.5, false],
  [312, 306, true],
  [312, 331.5, true],
  [312, 357, true],
  [312, 382.5, false],
  [312, 408, true],
  [312, 433.5, false],
  [312, 459, false],
  [312, 484.5, false],
  [312, 510, false],
  [312, 535.5, false],
  [312, 561, false],
  [312, 586.5, false],
  [312, 612, false],
  [312, 637.5, false],
  [312, 663, false],
  [312, 688.5, false],
  [312, 714, false],
  [312, 739.5, true],
  [312, 765, false],
  [312, 790.5, false],
  [312, 816, false],
  [312, 841.5, false],
  [312, 867, false],
  [312, 892.5, true],
  [312, 918, false],
  [312, 943.5, false],
  [312, 969, false],
  [312, 994.5, false],
  [312, 1020, false],

  [338, -25.5, false],
  [338, 0, true],
  [338, 25.5, true],
  [338, 51, true],
  [338, 76.5, true],
  [338, 102, true],
  [338, 127.5, true],
  [338, 153, true],
  [338, 178.5, true],
  [338, 204, true],
  [338, 229.5, true],
  [338, 255, true],
  [338, 280.5, true],
  [338, 306, true],
  [338, 331.5, true],
  [338, 357, true],
  [338, 382.5, true],
  [338, 408, true],
  [338, 433.5, true],
  [338, 459, true],
  [338, 484.5, true],
  [338, 510, true],
  [338, 535.5, true],
  [338, 561, true],
  [338, 586.5, true],
  [338, 612, true],
  [338, 637.5, true],
  [338, 663, true],
  [338, 688.5, true],
  [338, 714, true],
  [338, 739.5, true],
  [338, 765, false],
  [338, 790.5, false],
  [338, 816, false],
  [338, 841.5, false],
  [338, 867, false],
  [338, 892.5, true],
  [338, 918, true],
  [338, 943.5, true],
  [338, 969, true],
  [338, 994.5, true],
  [338, 1020, false],

  [364, -25.5, false],
  [364, 0, false],
  [364, 25.5, false],
  [364, 51, true],
  [364, 76.5, false],
  [364, 102, false],
  [364, 127.5, false],
  [364, 153, false],
  [364, 178.5, false],
  [364, 204, false],
  [364, 229.5, false],
  [364, 255, true],
  [364, 280.5, false],
  [364, 306, true],
  [364, 331.5, true],
  [364, 357, true],
  [364, 382.5, false],
  [364, 408, false],
  [364, 433.5, false],
  [364, 459, true],
  [364, 484.5, false],
  [364, 510, false],
  [364, 535.5, false],
  [364, 561, false],
  [364, 586.5, false],
  [364, 612, false],
  [364, 637.5, false],
  [364, 663, false],
  [364, 688.5, false],
  [364, 714, false],
  [364, 739.5, true],
  [364, 765, false],
  [364, 790.5, false],
  [364, 816, false],
  [364, 841.5, false],
  [364, 867, false],
  [364, 892.5, true],
  [364, 918, false],
  [364, 943.5, false],
  [364, 969, false],
  [364, 994.5, false],
  [364, 1020, false],

  [390, -25.5, false],
  [390, 0, false],
  [390, 25.5, false],
  [390, 51, true],
  [390, 76.5, false],
  [390, 102, false],
  [390, 127.5, false],
  [390, 153, false],
  [390, 178.5, false],
  [390, 204, false],
  [390, 229.5, false],
  [390, 255, true],
  [390, 280.5, false],
  [390, 306, false],
  [390, 331.5, false],
  [390, 357, false],
  [390, 382.5, false],
  [390, 408, false],
  [390, 433.5, false],
  [390, 459, true],
  [390, 484.5, false],
  [390, 510, false],
  [390, 535.5, false],
  [390, 561, false],
  [390, 586.5, false],
  [390, 612, false],
  [390, 637.5, false],
  [390, 663, false],
  [390, 688.5, false],
  [390, 714, false],
  [390, 739.5, true],
  [390, 765, false],
  [390, 790.5, false],
  [390, 816, false],
  [390, 841.5, false],
  [390, 867, false],
  [390, 892.5, true],
  [390, 918, false],
  [390, 943.5, false],
  [390, 969, false],
  [390, 994.5, false],
  [390, 1020, false],

  [416, -25.5, false],
  [416, 0, false],
  [416, 25.5, false],
  [416, 51, true],
  [416, 76.5, false],
  [416, 102, false],
  [416, 127.5, false],
  [416, 153, false],
  [416, 178.5, false],
  [416, 204, false],
  [416, 229.5, false],
  [416, 255, true],
  [416, 280.5, false],
  [416, 306, false],
  [416, 331.5, false],
  [416, 357, false],
  [416, 382.5, false],
  [416, 408, false],
  [416, 433.5, false],
  [416, 459, true],
  [416, 484.5, false],
  [416, 510, false],
  [416, 535.5, false],
  [416, 561, false],
  [416, 586.5, false],
  [416, 612, false],
  [416, 637.5, false],
  [416, 663, false],
  [416, 688.5, false],
  [416, 714, false],
  [416, 739.5, true],
  [416, 765, false],
  [416, 790.5, false],
  [416, 816, false],
  [416, 841.5, false],
  [416, 867, false],
  [416, 892.5, true],
  [416, 918, true],
  [416, 943.5, true],
  [416, 969, true],
  [416, 994.5, true],
  [416, 1020, false],

  [442, -25.5, false],
  [442, 0, false],
  [442, 25.5, false],
  [442, 51, true],
  [442, 76.5, true],
  [442, 102, true],
  [442, 127.5, true],
  [442, 153, true],
  [442, 178.5, true],
  [442, 204, true],
  [442, 229.5, true],
  [442, 255, true],
  [442, 280.5, true],
  [442, 306, true],
  [442, 331.5, true],
  [442, 357, true],
  [442, 382.5, true],
  [442, 408, true],
  [442, 433.5, true],
  [442, 459, true],
  [442, 484.5, true],
  [442, 510, true],
  [442, 535.5, true],
  [442, 561, false],
  [442, 586.5, false],
  [442, 612, false],
  [442, 637.5, false],
  [442, 663, false],
  [442, 688.5, false],
  [442, 714, false],
  [442, 739.5, true],
  [442, 765, false],
  [442, 790.5, false],
  [442, 816, false],
  [442, 841.5, false],
  [442, 867, false],
  [442, 892.5, true],
  [442, 918, true],
  [442, 943.5, true],
  [442, 969, true],
  [442, 994.5, true],
  [442, 1020, false],

  [468, -25.5, false],
  [468, 0, false],
  [468, 25.5, false],
  [468, 51, true],
  [468, 76.5, true],
  [468, 102, true],
  [468, 127.5, true],
  [468, 153, true],
  [468, 178.5, true],
  [468, 204, true],
  [468, 229.5, true],
  [468, 255, true],
  [468, 280.5, false],
  [468, 306, false],
  [468, 331.5, false],
  [468, 357, false],
  [468, 382.5, false],
  [468, 408, true],
  [468, 433.5, true],
  [468, 459, true],
  [468, 484.5, true],
  [468, 510, true],
  [468, 535.5, true],
  [468, 561, true],
  [468, 586.5, true],
  [468, 612, true],
  [468, 637.5, false],
  [468, 663, false],
  [468, 688.5, false],
  [468, 714, false],
  [468, 739.5, true],
  [468, 765, false],
  [468, 790.5, false],
  [468, 816, false],
  [468, 841.5, false],
  [468, 867, false],
  [468, 892.5, true],
  [468, 918, true],
  [468, 943.5, true],
  [468, 969, true],
  [468, 994.5, true],
  [468, 1020, false],

  [494, -25.5, false],
  [494, 0, false],
  [494, 25.5, false],
  [494, 51, true],
  [494, 76.5, true],
  [494, 102, true],
  [494, 127.5, true],
  [494, 153, true],
  [494, 178.5, true],
  [494, 204, true],
  [494, 229.5, true],
  [494, 255, true],
  [494, 280.5, false],
  [494, 306, false],
  [494, 331.5, false],
  [494, 357, false],
  [494, 382.5, false],
  [494, 408, true],
  [494, 433.5, true],
  [494, 459, true],
  [494, 484.5, true],
  [494, 510, true],
  [494, 535.5, true],
  [494, 561, true],
  [494, 586.5, true],
  [494, 612, true],
  [494, 637.5, false],
  [494, 663, false],
  [494, 688.5, false],
  [494, 714, false],
  [494, 739.5, true],
  [494, 765, true],
  [494, 790.5, true],
  [494, 816, true],
  [494, 841.5, true],
  [494, 867, true],
  [494, 892.5, true],
  [494, 918, true],
  [494, 943.5, true],
  [494, 969, true],
  [494, 994.5, true],
  [494, 1020, false],

  [520, -25.5, false],
  [520, 0, false],
  [520, 25.5, false],
  [520, 51, false],
  [520, 76.5, false],
  [520, 102, false],
  [520, 127.5, false],
  [520, 153, false],
  [520, 178.5, false],
  [520, 204, false],
  [520, 229.5, false],
  [520, 255, false],
  [520, 280.5, false],
  [520, 306, false],
  [520, 331.5, false],
  [520, 357, false],
  [520, 382.5, false],
  [520, 408, true],
  [520, 433.5, true],
  [520, 459, true],
  [520, 484.5, true],
  [520, 510, true],
  [520, 535.5, true],
  [520, 561, true],
  [520, 586.5, true],
  [520, 612, true],
  [520, 637.5, false],
  [520, 663, false],
  [520, 688.5, false],
  [520, 714, false],
  [520, 739.5, true],
  [520, 765, false],
  [520, 790.5, false],
  [520, 816, false],
  [520, 841.5, false],
  [520, 867, false],
  [520, 892.5, false],
  [520, 918, false],
  [520, 943.5, false],
  [520, 969, false],
  [520, 994.5, false],
  [520, 1020, false],

  [546, -25.5, false],
  [546, 0, false],
  [546, 25.5, false],
  [546, 51, false],
  [546, 76.5, false],
  [546, 102, false],
  [546, 127.5, false],
  [546, 153, false],
  [546, 178.5, false],
  [546, 204, false],
  [546, 229.5, false],
  [546, 255, false],
  [546, 280.5, false],
  [546, 306, false],
  [546, 331.5, false],
  [546, 357, false],
  [546, 382.5, false],
  [546, 408, true],
  [546, 433.5, true],
  [546, 459, true],
  [546, 484.5, true],
  [546, 510, true],
  [546, 535.5, true],
  [546, 561, true],
  [546, 586.5, true],
  [546, 612, true],
  [546, 637.5, true],
  [546, 663, true],
  [546, 688.5, true],
  [546, 714, true],
  [546, 739.5, true],
  [546, 765, false],
  [546, 790.5, false],
  [546, 816, false],
  [546, 841.5, false],
  [546, 867, false],
  [546, 892.5, false],
  [546, 918, false],
  [546, 943.5, false],
  [546, 969, false],
  [546, 994.5, false],
  [546, 1020, false],

  [572, -25.5, false],
  [572, 0, false],
  [572, 25.5, false],
  [572, 51, false],
  [572, 76.5, false],
  [572, 102, false],
  [572, 127.5, false],
  [572, 153, false],
  [572, 178.5, false],
  [572, 204, false],
  [572, 229.5, false],
  [572, 255, false],
  [572, 280.5, false],
  [572, 306, false],
  [572, 331.5, false],
  [572, 357, false],
  [572, 382.5, false],
  [572, 408, false],
  [572, 433.5, false],
  [572, 459, false],
  [572, 484.5, false],
  [572, 510, false],
  [572, 535.5, false],
  [572, 561, false],
  [572, 586.5, false],
  [572, 612, false],
  [572, 637.5, false],
  [572, 663, false],
  [572, 688.5, false],
  [572, 714, false],
  [572, 739.5, true],
  [572, 765, true],
  [572, 790.5, true],
  [572, 816, true],
  [572, 841.5, true],
  [572, 867, true],
  [572, 892.5, true],
  [572, 918, true],
  [572, 943.5, true],
  [572, 969, true],
  [572, 994.5, true],
  [572, 1020, false],

  [598, -25.5, false],
  [598, 0, false],
  [598, 25.5, false],
  [598, 51, false],
  [598, 76.5, false],
  [598, 102, false],
  [598, 127.5, false],
  [598, 153, false],
  [598, 178.5, false],
  [598, 204, false],
  [598, 229.5, false],
  [598, 255, false],
  [598, 280.5, false],
  [598, 306, false],
  [598, 331.5, false],
  [598, 357, false],
  [598, 382.5, false],
  [598, 408, false],
  [598, 433.5, false],
  [598, 459, false],
  [598, 484.5, false],
  [598, 510, false],
  [598, 535.5, false],
  [598, 561, false],
  [598, 586.5, false],
  [598, 612, false],
  [598, 637.5, false],
  [598, 663, false],
  [598, 688.5, false],
  [598, 714, false],
  [598, 739.5, true],
  [598, 765, true],
  [598, 790.5, true],
  [598, 816, true],
  [598, 841.5, true],
  [598, 867, true],
  [598, 892.5, true],
  [598, 918, true],
  [598, 943.5, true],
  [598, 969, true],
  [598, 994.5, true],
  [998, 1020, false],

  [642, -25.5, false],
  [624, 0, false],
  [624, 25.5, false],
  [624, 51, false],
  [624, 76.5, false],
  [624, 102, false],
  [624, 127.5, false],
  [624, 153, false],
  [624, 178.5, false],
  [624, 204, false],
  [624, 229.5, false],
  [624, 255, false],
  [624, 280.5, false],
  [624, 306, false],
  [624, 331.5, false],
  [624, 357, false],
  [624, 382.5, false],
  [624, 408, false],
  [624, 433.5, false],
  [624, 459, false],
  [624, 484.5, false],
  [624, 510, false],
  [624, 535.5, false],
  [624, 561, false],
  [624, 586.5, false],
  [624, 612, false],
  [624, 637.5, false],
  [624, 663, false],
  [624, 688.5, false],
  [624, 714, false],
  [624, 739.5, false],
  [624, 765, false],
  [624, 790.5, false],
  [624, 816, false],
  [624, 841.5, false],
  [624, 867, false],
  [624, 892.5, false],
  [624, 918, false],
  [624, 943.5, false],
  [624, 969, false],
  [624, 994.5, false],
]

// Находим героя
var heroes = document.querySelector('.tileP')

// Рандомное место при инициализации
let randomPosition = map.filter((el) => el[2])
let randomPositionHeroes =
  randomPosition[Math.floor(Math.random() * randomPosition.length)]
heroes.style.top = `${randomPositionHeroes[0]}px`
heroes.style.left = `${randomPositionHeroes[1]}px`

// Позиционирование героя (начало)
let topPosition = randomPositionHeroes[0]
let leftPosition = randomPositionHeroes[1]

// Ориентация героя на карте относительно стен
let borderPosition = map.filter(
  (el) => el[0] === topPosition && el[1] === leftPosition
)[0][2]

// Здоровье
let score = 100
var lineHe = document.querySelector('#health')
lineHe.style.width = `${score}%`

// Мечи
var tileSW1 = document.querySelector('#tileSW1')
var tileSW2 = document.querySelector('#tileSW2')
let randomPositionTileSW1 =
  randomPosition[Math.floor(Math.random() * randomPosition.length)]
let randomPositionTileSW2 =
  randomPosition[Math.floor(Math.random() * randomPosition.length)]

tileSW1.style.top = `${randomPositionTileSW1[0]}px`
tileSW1.style.left = `${randomPositionTileSW1[1]}px`

tileSW2.style.top = `${randomPositionTileSW2[0]}px`
tileSW2.style.left = `${randomPositionTileSW2[1]}px`

// Зелья
var tileHP1 = document.querySelector('#tileHP1')
var tileHP2 = document.querySelector('#tileHP2')
var tileHP3 = document.querySelector('#tileHP3')
var tileHP4 = document.querySelector('#tileHP4')
var tileHP5 = document.querySelector('#tileHP5')
var tileHP6 = document.querySelector('#tileHP6')
var tileHP7 = document.querySelector('#tileHP7')
var tileHP8 = document.querySelector('#tileHP8')
var tileHP9 = document.querySelector('#tileHP9')
var tileHP10 = document.querySelector('#tileHP10')

let randomPositionTileHP1 =
  randomPosition[Math.floor(Math.random() * randomPosition.length)]
let randomPositionTileHP2 =
  randomPosition[Math.floor(Math.random() * randomPosition.length)]
let randomPositionTileHP3 =
  randomPosition[Math.floor(Math.random() * randomPosition.length)]
let randomPositionTileHP4 =
  randomPosition[Math.floor(Math.random() * randomPosition.length)]
let randomPositionTileHP5 =
  randomPosition[Math.floor(Math.random() * randomPosition.length)]
let randomPositionTileHP6 =
  randomPosition[Math.floor(Math.random() * randomPosition.length)]
let randomPositionTileHP7 =
  randomPosition[Math.floor(Math.random() * randomPosition.length)]
let randomPositionTileHP8 =
  randomPosition[Math.floor(Math.random() * randomPosition.length)]
let randomPositionTileHP9 =
  randomPosition[Math.floor(Math.random() * randomPosition.length)]
let randomPositionTileHP10 =
  randomPosition[Math.floor(Math.random() * randomPosition.length)]

// tileHP1
tileHP1.style.top = `${randomPositionTileHP1[0]}px`
tileHP1.style.left = `${randomPositionTileHP1[1]}px`

// tileHP2
tileHP2.style.top = `${randomPositionTileHP2[0]}px`
tileHP2.style.left = `${randomPositionTileHP2[1]}px`

// tileHP3
tileHP3.style.top = `${randomPositionTileHP3[0]}px`
tileHP3.style.left = `${randomPositionTileHP3[1]}px`

// tileHP4
tileHP4.style.top = `${randomPositionTileHP4[0]}px`
tileHP4.style.left = `${randomPositionTileHP4[1]}px`

// tileHP5
tileHP5.style.top = `${randomPositionTileHP5[0]}px`
tileHP5.style.left = `${randomPositionTileHP5[1]}px`

// tileHP6
tileHP6.style.top = `${randomPositionTileHP6[0]}px`
tileHP6.style.left = `${randomPositionTileHP6[1]}px`

// tileHP7
tileHP7.style.top = `${randomPositionTileHP7[0]}px`
tileHP7.style.left = `${randomPositionTileHP7[1]}px`

// tileHP8
tileHP8.style.top = `${randomPositionTileHP8[0]}px`
tileHP8.style.left = `${randomPositionTileHP8[1]}px`

// tileHP9
tileHP9.style.top = `${randomPositionTileHP9[0]}px`
tileHP9.style.left = `${randomPositionTileHP9[1]}px`

// tileHP10
tileHP10.style.top = `${randomPositionTileHP10[0]}px`
tileHP10.style.left = `${randomPositionTileHP10[1]}px`

// Пишем силу
let inventory = document.querySelector('.inventory')
let inventorybBoxImg = document.querySelector('.inventory-box-img')
inventorybBoxImg.style = 'display:none'
let powerHit = 1

// Противник 1
var tileE1 = document.querySelector('#tileE1')
let randomPositionTileE1 =
  randomPosition[Math.floor(Math.random() * randomPosition.length)]
let topPositionTileE1 = randomPositionTileE1[0]
let leftPositionTileE1 = randomPositionTileE1[1]
tileE1.style.top = `${topPositionTileE1}px`
tileE1.style.left = `${leftPositionTileE1}px`
let scoreTile1 = 100
var lineTile1 = document.querySelector('#health_tileE1')
lineTile1.style.width = `${scoreTile1}%`

// Противник 2
var tileE2 = document.querySelector('#tileE2')
let randomPositionTileE2 =
  randomPosition[Math.floor(Math.random() * randomPosition.length)]
let topPositionTileE2 = randomPositionTileE2[0]
let leftPositionTileE2 = randomPositionTileE2[1]
tileE2.style.top = `${topPositionTileE2}px`
tileE2.style.left = `${leftPositionTileE2}px`
let scoreTile2 = 100
var lineTile2 = document.querySelector('#health_tileE2')
lineTile2.style.width = `${scoreTile2}%`

// Противник 3
var tileE3 = document.querySelector('#tileE3')
let randomPositionTileE3 =
  randomPosition[Math.floor(Math.random() * randomPosition.length)]
let topPositionTileE3 = randomPositionTileE3[0]
let leftPositionTileE3 = randomPositionTileE3[1]
tileE3.style.top = `${topPositionTileE3}px`
tileE3.style.left = `${leftPositionTileE3}px`
let scoreTile3 = 100
var lineTile3 = document.querySelector('#health_tileE3')
lineTile3.style.width = `${scoreTile3}%`

// Противник 4
var tileE4 = document.querySelector('#tileE4')
let randomPositionTileE4 =
  randomPosition[Math.floor(Math.random() * randomPosition.length)]
let topPositionTileE4 = randomPositionTileE4[0]
let leftPositionTileE4 = randomPositionTileE4[1]
tileE4.style.top = `${topPositionTileE4}px`
tileE4.style.left = `${leftPositionTileE4}px`
let scoreTile4 = 100
var lineTile4 = document.querySelector('#health_tileE4')
lineTile4.style.width = `${scoreTile4}%`

// Противник 5
var tileE5 = document.querySelector('#tileE5')
let randomPositionTileE5 =
  randomPosition[Math.floor(Math.random() * randomPosition.length)]
let topPositionTileE5 = randomPositionTileE5[0]
let leftPositionTileE5 = randomPositionTileE5[1]
tileE5.style.top = `${topPositionTileE5}px`
tileE5.style.left = `${leftPositionTileE5}px`
let scoreTile5 = 100
var lineTile5 = document.querySelector('#health_tileE5')
lineTile5.style.width = `${scoreTile5}%`

// Противник 6
var tileE6 = document.querySelector('#tileE6')
let randomPositionTileE6 =
  randomPosition[Math.floor(Math.random() * randomPosition.length)]
let topPositionTileE6 = randomPositionTileE6[0]
let leftPositionTileE6 = randomPositionTileE6[1]
tileE6.style.top = `${topPositionTileE6}px`
tileE6.style.left = `${leftPositionTileE6}px`
let scoreTile6 = 100
var lineTile6 = document.querySelector('#health_tileE6')
lineTile6.style.width = `${scoreTile6}%`

// Противник 7
var tileE7 = document.querySelector('#tileE7')
let randomPositionTileE7 =
  randomPosition[Math.floor(Math.random() * randomPosition.length)]
let topPositionTileE7 = randomPositionTileE7[0]
let leftPositionTileE7 = randomPositionTileE7[1]
tileE7.style.top = `${topPositionTileE7}px`
tileE7.style.left = `${leftPositionTileE7}px`
let scoreTile7 = 100
var lineTile7 = document.querySelector('#health_tileE7')
lineTile7.style.width = `${scoreTile7}%`

// Противник 8
var tileE8 = document.querySelector('#tileE8')
let randomPositionTileE8 =
  randomPosition[Math.floor(Math.random() * randomPosition.length)]
let topPositionTileE8 = randomPositionTileE8[0]
let leftPositionTileE8 = randomPositionTileE8[1]
tileE8.style.top = `${topPositionTileE8}px`
tileE8.style.left = `${leftPositionTileE8}px`
let scoreTile8 = 100
var lineTile8 = document.querySelector('#health_tileE8')
lineTile8.style.width = `${scoreTile8}%`

// Противник 9
var tileE9 = document.querySelector('#tileE9')
let randomPositionTileE9 =
  randomPosition[Math.floor(Math.random() * randomPosition.length)]
let topPositionTileE9 = randomPositionTileE9[0]
let leftPositionTileE9 = randomPositionTileE9[1]
tileE9.style.top = `${topPositionTileE9}px`
tileE9.style.left = `${leftPositionTileE9}px`
let scoreTile9 = 100
var lineTile9 = document.querySelector('#health_tileE9')
lineTile9.style.width = `${scoreTile9}%`

// Противник 10
var tileE10 = document.querySelector('#tileE10')
let randomPositionTileE10 =
  randomPosition[Math.floor(Math.random() * randomPosition.length)]
let topPositionTileE10 = randomPositionTileE10[0]
let leftPositionTileE10 = randomPositionTileE10[1]
tileE10.style.top = `${topPositionTileE10}px`
tileE10.style.left = `${leftPositionTileE10}px`
let scoreTile10 = 100
var lineTile10 = document.querySelector('#health_tileE10')
lineTile10.style.width = `${scoreTile10}%`

// вверх
let topStepUp = (top, left) => {
  return map.filter((el) => el[0] === top - 26 && el[1] === left)[0][2]
}

// влево
let stepLeftBack = (top, left) => {
  return map.filter((el) => el[0] === top && el[1] === left - 25.5)[0][2]
}

// вниз
let topStepDown = (top, left) => {
  return map.filter((el) => el[0] === top + 26 && el[1] === left)[0][2]
}

// вправо
let stepLeftStright = (top, left) => {
  return map.filter((el) => el[0] === top && el[1] === left + 25.5)[0][2]
}

// Сила удара
let powerHeroes = 15

// Отнимаем силы у нашего игрока
const healthPlayer = (topEnemy, leftEnemy, scoreTile) => {
  // Слева от врга
  if (
    topPosition == topEnemy &&
    leftPosition + 25.5 === leftEnemy &&
    scoreTile > 0
  ) {
    score = score - 20
    lineHe.style.width = `${score}%`
  }
  // Справа от врага
  if (
    topPosition == topEnemy &&
    leftPosition - 25.5 === leftEnemy &&
    scoreTile > 0
  ) {
    score = score - 20
    lineHe.style.width = `${score}%`
  }
  // Снизу от врага
  if (
    topPosition + 26 === topEnemy &&
    leftPosition === leftEnemy &&
    scoreTile > 0
  ) {
    score = score - 20
    lineHe.style.width = `${score}%`
  }
  // Сверху от врага
  if (
    topPosition - 26 === topEnemy &&
    leftPosition === leftEnemy &&
    scoreTile > 0
  ) {
    score = score - 20
    lineHe.style.width = `${score}%`
  }
}

// Движение противника 1
setInterval(
  (stepEnemy = () => {
    topPositionTileE1 + 26 < 598 &&
    topStepDown(topPositionTileE1, leftPositionTileE1)
      ? (topPositionTileE1 = topPositionTileE1 + 26)
      : stepLeftBack(topPositionTileE1, leftPositionTileE1) &&
        leftPositionTileE1 > 0
      ? (leftPositionTileE1 = leftPositionTileE1 - 25.5)
      : ([topPositionTileE1, leftPositionTileE1] = randomPosition[
          Math.floor(Math.random() * randomPosition.length)
        ].slice(0, 2))
    tileE1.style.top = `${topPositionTileE1}px`
    tileE1.style.left = `${leftPositionTileE1}px`
    scoreTile1 <= 0 ? (tileE1.style = 'display:none') : false
    // Если противник 'жив', то показываем его, если нет, то убираем
    scoreTile1 > 0
      ? healthPlayer(topPositionTileE1, leftPositionTileE1, scoreTile1)
      : false
  }),
  800
)

// Движение противника 2
setInterval(
  (stepEnemy = () => {
    topPositionTileE2 - 26 > 0 &&
    topStepUp(topPositionTileE2, leftPositionTileE2)
      ? (topPositionTileE2 = topPositionTileE2 - 26)
      : stepLeftStright(topPositionTileE2, leftPositionTileE2) &&
        leftPositionTileE2 + 25.5 < 994
      ? (leftPositionTileE2 = leftPositionTileE2 + 25.5)
      : ([topPositionTileE2, leftPositionTileE2] = randomPosition[
          Math.floor(Math.random() * randomPosition.length)
        ].slice(0, 2))
    tileE2.style.top = `${topPositionTileE2}px`
    tileE2.style.left = `${leftPositionTileE2}px`
    scoreTile2 <= 0 ? (tileE2.style = 'display:none') : false
    // Если противник 'жив', то показываем его, если нет, то убираем
    scoreTile2 > 0
      ? healthPlayer(topPositionTileE2, leftPositionTileE2, scoreTile2)
      : false
  }),
  800
)

// Движение противника 3
setInterval(
  (stepEnemy = () => {
    topPositionTileE3 + 26 < 598 &&
    topStepDown(topPositionTileE3, leftPositionTileE3)
      ? (topPositionTileE3 = topPositionTileE3 + 26)
      : leftPositionTileE3 - 25.5 > 0 &&
        stepLeftBack(topPositionTileE3, leftPositionTileE3)
      ? (leftPositionTileE3 = leftPositionTileE3 - 25.5)
      : ([topPositionTileE3, leftPositionTileE3] = randomPosition[
          Math.floor(Math.random() * randomPosition.length)
        ].slice(0, 2))
    tileE3.style.top = `${topPositionTileE3}px`
    tileE3.style.left = `${leftPositionTileE3}px`
    scoreTile3 <= 0 ? (tileE3.style = 'display:none') : false
    // Если противник 'жив', то показываем его, если нет, то убираем
    scoreTile3 > 0
      ? healthPlayer(topPositionTileE3, leftPositionTileE3, scoreTile3)
      : false
  }),
  800
)

// Движение противника 4
setInterval(
  (stepEnemy = () => {
    topPositionTileE4 - 26 > 0 &&
    topStepUp(topPositionTileE4, leftPositionTileE4)
      ? (topPositionTileE4 = topPositionTileE4 - 26)
      : stepLeftStright(topPositionTileE4, leftPositionTileE4) &&
        leftPositionTileE4 + 25.5 < 994
      ? (leftPositionTileE4 = leftPositionTileE4 + 25.5)
      : ([topPositionTileE4, leftPositionTileE4] = randomPosition[
          Math.floor(Math.random() * randomPosition.length)
        ].slice(0, 2))
    tileE4.style.top = `${topPositionTileE4}px`
    tileE4.style.left = `${leftPositionTileE4}px`
    scoreTile4 <= 0 ? (tileE4.style = 'display:none') : false
    // Если противник 'жив', то показываем его, если нет, то убираем
    scoreTile4 > 0
      ? healthPlayer(topPositionTileE4, leftPositionTileE4, scoreTile4)
      : false
  }),
  800
)

// Движение противника 5
setInterval(
  (stepEnemy = () => {
    topPositionTileE5 + 26 < 598 &&
    topStepDown(topPositionTileE5, leftPositionTileE5)
      ? (topPositionTileE5 = topPositionTileE5 + 26)
      : leftPositionTileE5 - 25.5 > 0 &&
        stepLeftBack(topPositionTileE5, leftPositionTileE5)
      ? (leftPositionTileE5 = leftPositionTileE5 - 25.5)
      : ([topPositionTileE5, leftPositionTileE5] = randomPosition[
          Math.floor(Math.random() * randomPosition.length)
        ].slice(0, 2))
    tileE5.style.top = `${topPositionTileE5}px`
    tileE5.style.left = `${leftPositionTileE5}px`
    scoreTile5 <= 0 ? (tileE5.style = 'display:none') : false
    // Если противник 'жив', то показываем его, если нет, то убираем
    scoreTile5 > 0
      ? healthPlayer(topPositionTileE5, leftPositionTileE5, scoreTile5)
      : false
  }),
  800
)

// Движение противника 6
setInterval(
  (stepEnemy = () => {
    topPositionTileE6 + 26 < 598 &&
    topStepDown(topPositionTileE6, leftPositionTileE6)
      ? (topPositionTileE6 = topPositionTileE6 + 26)
      : stepLeftBack(topPositionTileE6, leftPositionTileE6) &&
        leftPositionTileE6 > 0
      ? (leftPositionTileE6 = leftPositionTileE6 - 25.5)
      : ([topPositionTileE6, leftPositionTileE6] = randomPosition[
          Math.floor(Math.random() * randomPosition.length)
        ].slice(0, 2))
    tileE6.style.top = `${topPositionTileE6}px`
    tileE6.style.left = `${leftPositionTileE6}px`
    scoreTile6 <= 0 ? (tileE6.style = 'display:none') : false
    // Если противник 'жив', то показываем его, если нет, то убираем
    scoreTile6 > 0
      ? healthPlayer(topPositionTileE6, leftPositionTileE6, scoreTile6)
      : false
  }),
  800
)

// Движение противника 7
setInterval(
  (stepEnemy = () => {
    topPositionTileE7 - 26 > 0 &&
    topStepUp(topPositionTileE7, leftPositionTileE7)
      ? (topPositionTileE7 = topPositionTileE7 - 26)
      : stepLeftStright(topPositionTileE7, leftPositionTileE7) &&
        leftPositionTileE7 + 25.5 < 994
      ? (leftPositionTileE7 = leftPositionTileE7 + 25.5)
      : ([topPositionTileE7, leftPositionTileE7] = randomPosition[
          Math.floor(Math.random() * randomPosition.length)
        ].slice(0, 2))
    tileE7.style.top = `${topPositionTileE7}px`
    tileE7.style.left = `${leftPositionTileE7}px`
    scoreTile7 <= 0 ? (tileE7.style = 'display:none') : false
    // Если противник 'жив', то показываем его, если нет, то убираем
    scoreTile7 > 0
      ? healthPlayer(topPositionTileE7, leftPositionTileE7, scoreTile7)
      : false
  }),
  800
)
// Движение противника 8
setInterval(
  (stepEnemy = () => {
    topPositionTileE8 + 26 < 598 &&
    topStepDown(topPositionTileE8, leftPositionTileE8)
      ? (topPositionTileE8 = topPositionTileE8 + 26)
      : stepLeftBack(topPositionTileE8, leftPositionTileE8) &&
        leftPositionTileE8 > 0
      ? (leftPositionTileE8 = leftPositionTileE8 - 25.5)
      : ([topPositionTileE8, leftPositionTileE8] = randomPosition[
          Math.floor(Math.random() * randomPosition.length)
        ].slice(0, 2))
    tileE8.style.top = `${topPositionTileE8}px`
    tileE8.style.left = `${leftPositionTileE8}px`
    scoreTile8 <= 0 ? (tileE8.style = 'display:none') : false
    // Если противник 'жив', то показываем его, если нет, то убираем
    scoreTile8 > 0
      ? healthPlayer(topPositionTileE8, leftPositionTileE8, scoreTile8)
      : false
  }),
  800
)
// Движение противника 9
setInterval(
  (stepEnemy = () => {
    topPositionTileE9 + 26 < 598 &&
    topStepDown(topPositionTileE9, leftPositionTileE9)
      ? (topPositionTileE9 = topPositionTileE9 + 26)
      : leftPositionTileE9 - 25.5 > 0 &&
        stepLeftBack(topPositionTileE9, leftPositionTileE9)
      ? (leftPositionTileE9 = leftPositionTileE9 - 25.5)
      : ([topPositionTileE9, leftPositionTileE9] = randomPosition[
          Math.floor(Math.random() * randomPosition.length)
        ].slice(0, 2))
    tileE9.style.top = `${topPositionTileE9}px`
    tileE9.style.left = `${leftPositionTileE9}px`
    scoreTile9 <= 0 ? (tileE9.style = 'display:none') : false
    // Если противник 'жив', то показываем его, если нет, то убираем
    scoreTile9 > 0
      ? healthPlayer(topPositionTileE9, leftPositionTileE9, scoreTile9)
      : false
  }),
  800
)

// Движение противника 10
setInterval(
  (stepEnemy = () => {
    topPositionTileE10 - 26 > 0 &&
    topStepUp(topPositionTileE10, leftPositionTileE10)
      ? (topPositionTileE10 = topPositionTileE10 - 26)
      : stepLeftStright(topPositionTileE10, leftPositionTileE10) &&
        leftPositionTileE10 + 25.5 < 994
      ? (leftPositionTileE10 = leftPositionTileE10 + 25.5)
      : ([topPositionTileE10, leftPositionTileE10] = randomPosition[
          Math.floor(Math.random() * randomPosition.length)
        ].slice(0, 2))
    tileE10.style.top = `${topPositionTileE10}px`
    tileE10.style.left = `${leftPositionTileE10}px`
    scoreTile10 <= 0 ? (tileE10.style = 'display:none') : false
    // Если противник 'жив', то показываем его, если нет, то убираем
    scoreTile10 > 0
      ? healthPlayer(topPositionTileE10, leftPositionTileE10, scoreTile10)
      : false
  }),
  800
)

//Отнимаем силы у противника 1
const healthEnemy1 = (topEnemy, leftEnemy) => {
  if (topPosition == topEnemy && leftPosition + 25.5 === leftEnemy) {
    scoreTile1 = scoreTile1 - powerHeroes
    lineTile1.style.width = `${scoreTile1}%`
  }
  // Справа от врага
  if (topPosition == topEnemy && leftPosition - 25.5 === leftEnemy) {
    scoreTile1 = scoreTile1 - powerHeroes
    lineTile1.style.width = `${scoreTile1}%`
  }
  // Снизу от врага
  if (topPosition + 26 === topEnemy && leftPosition === leftEnemy) {
    scoreTile1 = scoreTile1 - powerHeroes
    lineTile1.style.width = `${scoreTile1}%`
  }
  // Сверху от врага
  if (topPosition - 26 === topEnemy && leftPosition === leftEnemy) {
    scoreTile1 = scoreTile1 - powerHeroes
    lineTile1.style.width = `${scoreTile1}%`
  }
}

//Отнимаем силы у противника2
const healthEnemy2 = (topEnemy, leftEnemy) => {
  if (topPosition == topEnemy && leftPosition + 25.5 === leftEnemy) {
    scoreTile2 = scoreTile2 - powerHeroes
    lineTile2.style.width = `${scoreTile2}%`
  }
  // Справа от врага
  if (topPosition == topEnemy && leftPosition - 25.5 === leftEnemy) {
    scoreTile2 = scoreTile2 - powerHeroes
    lineTile2.style.width = `${scoreTile2}%`
  }
  // Снизу от врага
  if (topPosition + 26 === topEnemy && leftPosition === leftEnemy) {
    scoreTile2 = scoreTile2 - powerHeroes
    lineTile2.style.width = `${scoreTile2}%`
  }
  // Сверху от врага
  if (topPosition - 26 === topEnemy && leftPosition === leftEnemy) {
    scoreTile2 = scoreTile2 - powerHeroes
    lineTile2.style.width = `${scoreTile2}%`
  }
}

//Отнимаем силы у противника3
const healthEnemy3 = (topEnemy, leftEnemy) => {
  if (topPosition == topEnemy && leftPosition + 25.5 === leftEnemy) {
    scoreTile3 = scoreTile3 - powerHeroes
    lineTile3.style.width = `${scoreTile3}%`
  }
  // Справа от врага
  if (topPosition == topEnemy && leftPosition - 25.5 === leftEnemy) {
    scoreTile3 = scoreTile3 - powerHeroes
    lineTile3.style.width = `${scoreTile3}%`
  }
  // Снизу от врага
  if (topPosition + 26 === topEnemy && leftPosition === leftEnemy) {
    scoreTile3 = scoreTile3 - powerHeroes
    lineTile3.style.width = `${scoreTile3}%`
  }
  // Сверху от врага
  if (topPosition - 26 === topEnemy && leftPosition === leftEnemy) {
    scoreTile3 = scoreTile3 - powerHeroes
    lineTile3.style.width = `${scoreTile3}%`
  }
}

//Отнимаем силы у противника4
const healthEnemy4 = (topEnemy, leftEnemy) => {
  if (topPosition == topEnemy && leftPosition + 25.5 === leftEnemy) {
    scoreTile4 = scoreTile4 - powerHeroes
    lineTile4.style.width = `${scoreTile4}%`
  }
  // Справа от врага
  if (topPosition == topEnemy && leftPosition - 25.5 === leftEnemy) {
    scoreTile4 = scoreTile4 - powerHeroes
    lineTile4.style.width = `${scoreTile4}%`
  }
  // Снизу от врага
  if (topPosition + 26 === topEnemy && leftPosition === leftEnemy) {
    scoreTile4 = scoreTile4 - powerHeroes
    lineTile4.style.width = `${scoreTile4}%`
  }
  // Сверху от врага
  if (topPosition - 26 === topEnemy && leftPosition === leftEnemy) {
    scoreTile4 = scoreTile4 - powerHeroes
    lineTile4.style.width = `${scoreTile4}%`
  }
}

//Отнимаем силы у противника 5
const healthEnemy5 = (topEnemy, leftEnemy) => {
  if (topPosition == topEnemy && leftPosition + 25.5 === leftEnemy) {
    scoreTile5 = scoreTile5 - powerHeroes
    lineTile5.style.width = `${scoreTile5}%`
  }
  // Справа от врага
  if (topPosition == topEnemy && leftPosition - 25.5 === leftEnemy) {
    scoreTile5 = scoreTile5 - powerHeroes
    lineTile5.style.width = `${scoreTile5}%`
  }
  // Снизу от врага
  if (topPosition + 26 === topEnemy && leftPosition === leftEnemy) {
    scoreTile5 = scoreTile5 - powerHeroes
    lineTile5.style.width = `${scoreTile5}%`
  }
  // Сверху от врага
  if (topPosition - 26 === topEnemy && leftPosition === leftEnemy) {
    scoreTile5 = scoreTile5 - powerHeroes
    lineTile5.style.width = `${scoreTile5}%`
  }
}

//Отнимаем силы у противника 6
const healthEnemy6 = (topEnemy, leftEnemy) => {
  if (topPosition == topEnemy && leftPosition + 25.5 === leftEnemy) {
    scoreTile6 = scoreTile6 - powerHeroes
    lineTile6.style.width = `${scoreTile6}%`
  }
  // Справа от врага
  if (topPosition == topEnemy && leftPosition - 25.5 === leftEnemy) {
    scoreTile6 = scoreTile6 - powerHeroes
    lineTile6.style.width = `${scoreTile6}%`
  }
  // Снизу от врага
  if (topPosition + 26 === topEnemy && leftPosition === leftEnemy) {
    scoreTile6 = scoreTile6 - powerHeroes
    lineTile6.style.width = `${scoreTile6}%`
  }
  // Сверху от врага
  if (topPosition - 26 === topEnemy && leftPosition === leftEnemy) {
    scoreTile6 = scoreTile6 - powerHeroes
    lineTile6.style.width = `${scoreTile6}%`
  }
}

//Отнимаем силы у противника 7
const healthEnemy7 = (topEnemy, leftEnemy) => {
  if (topPosition == topEnemy && leftPosition + 25.5 === leftEnemy) {
    scoreTile7 = scoreTile7 - powerHeroes
    lineTile7.style.width = `${scoreTile7}%`
  }
  // Справа от врага
  if (topPosition == topEnemy && leftPosition - 25.5 === leftEnemy) {
    scoreTile7 = scoreTile7 - powerHeroes
    lineTile7.style.width = `${scoreTile7}%`
  }
  // Снизу от врага
  if (topPosition + 26 === topEnemy && leftPosition === leftEnemy) {
    scoreTile7 = scoreTile7 - powerHeroes
    lineTile7.style.width = `${scoreTile7}%`
  }
  // Сверху от врага
  if (topPosition - 26 === topEnemy && leftPosition === leftEnemy) {
    scoreTile7 = scoreTile7 - powerHeroes
    lineTile7.style.width = `${scoreTile7}%`
  }
}

//Отнимаем силы у противника 8
const healthEnemy8 = (topEnemy, leftEnemy) => {
  if (topPosition == topEnemy && leftPosition + 25.5 === leftEnemy) {
    scoreTile8 = scoreTile8 - powerHeroes
    lineTile8.style.width = `${scoreTile8}%`
  }
  // Справа от врага
  if (topPosition == topEnemy && leftPosition - 25.5 === leftEnemy) {
    scoreTile8 = scoreTile8 - powerHeroes
    lineTile8.style.width = `${scoreTile8}%`
  }
  // Снизу от врага
  if (topPosition + 26 === topEnemy && leftPosition === leftEnemy) {
    scoreTile8 = scoreTile8 - powerHeroes
    lineTile8.style.width = `${scoreTile8}%`
  }
  // Сверху от врага
  if (topPosition - 26 === topEnemy && leftPosition === leftEnemy) {
    scoreTile8 = scoreTile8 - powerHeroes
    lineTile8.style.width = `${scoreTile8}%`
  }
}

//Отнимаем силы у противника 9
const healthEnemy9 = (topEnemy, leftEnemy) => {
  if (topPosition == topEnemy && leftPosition + 25.5 === leftEnemy) {
    scoreTile9 = scoreTile9 - powerHeroes
    lineTile9.style.width = `${scoreTile9}%`
  }
  // Справа от врага
  if (topPosition == topEnemy && leftPosition - 25.5 === leftEnemy) {
    scoreTile9 = scoreTile9 - powerHeroes
    lineTile9.style.width = `${scoreTile9}%`
  }
  // Снизу от врага
  if (topPosition + 26 === topEnemy && leftPosition === leftEnemy) {
    scoreTile9 = scoreTile9 - powerHeroes
    lineTile9.style.width = `${scoreTile9}%`
  }
  // Сверху от врага
  if (topPosition - 26 === topEnemy && leftPosition === leftEnemy) {
    scoreTile9 = scoreTile9 - powerHeroes
    lineTile9.style.width = `${scoreTile9}%`
  }
}

//Отнимаем силы у противника 10
const healthEnemy10 = (topEnemy, leftEnemy) => {
  if (topPosition == topEnemy && leftPosition + 25.5 === leftEnemy) {
    scoreTile10 = scoreTile10 - powerHeroes
    lineTile10.style.width = `${scoreTile10}%`
  }
  // Справа от врага
  if (topPosition == topEnemy && leftPosition - 25.5 === leftEnemy) {
    scoreTile10 = scoreTile10 - powerHeroes
    lineTile10.style.width = `${scoreTile10}%`
  }
  // Снизу от врага
  if (topPosition + 26 === topEnemy && leftPosition === leftEnemy) {
    scoreTile10 = scoreTile10 - powerHeroes
    lineTile10.style.width = `${scoreTile10}%`
  }
  // Сверху от врага
  if (topPosition - 26 === topEnemy && leftPosition === leftEnemy) {
    scoreTile10 = scoreTile10 - powerHeroes
    lineTile10.style.width = `${scoreTile10}%`
  }
}

// Передвижения игрока на карте
document.addEventListener('keydown', function (event) {
  // Удар соперника на пробел
  if (event.code === 'Space') {
    healthEnemy1(topPositionTileE1, leftPositionTileE1)
    healthEnemy2(topPositionTileE2, leftPositionTileE2)
    healthEnemy3(topPositionTileE3, leftPositionTileE3)
    healthEnemy4(topPositionTileE4, leftPositionTileE4)
    healthEnemy5(topPositionTileE5, leftPositionTileE5)
    healthEnemy6(topPositionTileE6, leftPositionTileE6)
    healthEnemy7(topPositionTileE7, leftPositionTileE7)
    healthEnemy8(topPositionTileE8, leftPositionTileE8)
    healthEnemy9(topPositionTileE9, leftPositionTileE9)
    healthEnemy10(topPositionTileE10, leftPositionTileE10)
  }

  if (event.code === 'KeyW') {
    let borderPosition = map.filter(
      (el) => el[0] === topPosition - 26 && el[1] === leftPosition
    )[0][2]
    topPosition =
      topPosition > 0 && borderPosition ? topPosition - 26 : topPosition
    heroes.style.top = `${topPosition}px`
    // Если противник 'жив', то отнимает силы игрока
    healthPlayer(topPositionTileE1, leftPositionTileE1, scoreTile1)
    healthPlayer(topPositionTileE2, leftPositionTileE2, scoreTile2)
    healthPlayer(topPositionTileE3, leftPositionTileE3, scoreTile3)
    healthPlayer(topPositionTileE4, leftPositionTileE4, scoreTile4)
    healthPlayer(topPositionTileE5, leftPositionTileE5, scoreTile5)
    healthPlayer(topPositionTileE6, leftPositionTileE6, scoreTile6)
    healthPlayer(topPositionTileE7, leftPositionTileE7, scoreTile7)
    healthPlayer(topPositionTileE8, leftPositionTileE8, scoreTile8)
    healthPlayer(topPositionTileE9, leftPositionTileE9, scoreTile9)
    healthPlayer(topPositionTileE10, leftPositionTileE10, scoreTile10)
  }
  if (event.code === 'KeyS') {
    let borderPosition = map.filter(
      (el) => el[0] === topPosition + 26 && el[1] === leftPosition
    )[0][2]
    topPosition =
      topPosition < 598 && borderPosition ? topPosition + 26 : topPosition
    heroes.style.top = `${topPosition}px`
    // Если противник 'жив', то отнимает силы игрока
    healthPlayer(topPositionTileE1, leftPositionTileE1, scoreTile1)
    healthPlayer(topPositionTileE2, leftPositionTileE2, scoreTile2)
    healthPlayer(topPositionTileE3, leftPositionTileE3, scoreTile3)
    healthPlayer(topPositionTileE4, leftPositionTileE4, scoreTile4)
    healthPlayer(topPositionTileE5, leftPositionTileE5, scoreTile5)
    healthPlayer(topPositionTileE6, leftPositionTileE6, scoreTile6)
    healthPlayer(topPositionTileE7, leftPositionTileE7, scoreTile7)
    healthPlayer(topPositionTileE8, leftPositionTileE8, scoreTile8)
    healthPlayer(topPositionTileE9, leftPositionTileE9, scoreTile9)
    healthPlayer(topPositionTileE10, leftPositionTileE10, scoreTile10)
  }
  if (event.code === 'KeyA') {
    let borderPosition = map.filter(
      (el) => el[0] === topPosition && el[1] === leftPosition - 25.5
    )[0][2]
    leftPosition =
      leftPosition > 0 && borderPosition ? leftPosition - 25.5 : leftPosition
    heroes.style.left = `${leftPosition}px`
    // Если противник 'жив', то отнимает силы игрока
    healthPlayer(topPositionTileE1, leftPositionTileE1, scoreTile1)
    healthPlayer(topPositionTileE2, leftPositionTileE2, scoreTile2)
    healthPlayer(topPositionTileE3, leftPositionTileE3, scoreTile3)
    healthPlayer(topPositionTileE4, leftPositionTileE4, scoreTile4)
    healthPlayer(topPositionTileE5, leftPositionTileE5, scoreTile5)
    healthPlayer(topPositionTileE6, leftPositionTileE6, scoreTile6)
    healthPlayer(topPositionTileE7, leftPositionTileE7, scoreTile7)
    healthPlayer(topPositionTileE8, leftPositionTileE8, scoreTile8)
    healthPlayer(topPositionTileE9, leftPositionTileE9, scoreTile9)
    healthPlayer(topPositionTileE10, leftPositionTileE10, scoreTile10)
  }
  if (event.code === 'KeyD') {
    let borderPosition = map.filter(
      (el) => el[0] === topPosition && el[1] === leftPosition + 25.5
    )[0][2]
    leftPosition =
      leftPosition < 994.5 && borderPosition
        ? leftPosition + 25.5
        : leftPosition
    heroes.style.left = `${leftPosition}px`
    // Если противник 'жив', то отнимает силы игрока
    healthPlayer(topPositionTileE1, leftPositionTileE1, scoreTile1)
    healthPlayer(topPositionTileE2, leftPositionTileE2, scoreTile2)
    healthPlayer(topPositionTileE3, leftPositionTileE3, scoreTile3)
    healthPlayer(topPositionTileE4, leftPositionTileE4, scoreTile4)
    healthPlayer(topPositionTileE5, leftPositionTileE5, scoreTile5)
    healthPlayer(topPositionTileE6, leftPositionTileE6, scoreTile6)
    healthPlayer(topPositionTileE7, leftPositionTileE7, scoreTile7)
    healthPlayer(topPositionTileE8, leftPositionTileE8, scoreTile8)
    healthPlayer(topPositionTileE9, leftPositionTileE9, scoreTile9)
    healthPlayer(topPositionTileE10, leftPositionTileE10, scoreTile10)
  }
  if (
    heroes.style.left === tileHP1.style.left &&
    heroes.style.top === tileHP1.style.top
  ) {
    score < 100 ? (tileHP1.style = 'display:none') : false
    score < 100 ? (lineHe.style.width = `${(score = 100)}%`) : false
  }
  if (
    heroes.style.left === tileHP2.style.left &&
    heroes.style.top === tileHP2.style.top
  ) {
    score < 100 ? (tileHP2.style = 'display:none') : false
    score < 100 ? (lineHe.style.width = `${(score = 100)}%`) : false
  }
  if (
    heroes.style.left === tileHP3.style.left &&
    heroes.style.top === tileHP3.style.top
  ) {
    score < 100 ? (tileHP3.style = 'display:none') : false
    score < 100 ? (lineHe.style.width = `${(score = 100)}%`) : false
  }
  if (
    heroes.style.left === tileHP4.style.left &&
    heroes.style.top === tileHP4.style.top
  ) {
    score < 100 ? (tileHP4.style = 'display:none') : false
    score < 100 ? (lineHe.style.width = `${(score = 100)}%`) : false
  }
  if (
    heroes.style.left === tileHP5.style.left &&
    heroes.style.top === tileHP5.style.top
  ) {
    score < 100 ? (tileHP5.style = 'display:none') : false
    score < 100 ? (lineHe.style.width = `${(score = 100)}%`) : false
  }
  if (
    heroes.style.left === tileHP6.style.left &&
    heroes.style.top === tileHP6.style.top
  ) {
    score < 100 ? (tileHP6.style = 'display:none') : false
    score < 100 ? (lineHe.style.width = `${(score = 100)}%`) : false
  }
  if (
    heroes.style.left === tileHP7.style.left &&
    heroes.style.top === tileHP7.style.top
  ) {
    score < 100 ? (tileHP7.style = 'display:none') : false
    score < 100 ? (lineHe.style.width = `${(score = 100)}%`) : false
  }
  if (
    heroes.style.left === tileHP8.style.left &&
    heroes.style.top === tileHP8.style.top
  ) {
    score < 100 ? (tileHP8.style = 'display:none') : false
    score < 100 ? (lineHe.style.width = `${(score = 100)}%`) : false
  }
  if (
    heroes.style.left === tileHP9.style.left &&
    heroes.style.top === tileHP9.style.top
  ) {
    score < 100 ? (tileHP9.style = 'display:none') : false
    score < 100 ? (lineHe.style.width = `${(score = 100)}%`) : false
  }
  if (
    heroes.style.left === tileHP10.style.left &&
    heroes.style.top === tileHP10.style.top
  ) {
    score < 100 ? (tileHP10.style = 'display:none') : false
    score < 100 ? (lineHe.style.width = `${(score = 100)}%`) : false
  }
  if (
    heroes.style.left === tileSW1.style.left &&
    heroes.style.top === tileSW1.style.top
  ) {
    powerHeroes = powerHeroes + 15
    tileSW1.style = 'display:none'
    powerHit = powerHit + 1
    inventory.innerHTML = `х${powerHit}`
    inventorybBoxImg.style = 'display:block'
  }
  if (
    heroes.style.left === tileSW2.style.left &&
    heroes.style.top === tileSW2.style.top
  ) {
    powerHeroes = powerHeroes + 15
    tileSW2.style = 'display:none'
    powerHit = powerHit + 1
    inventory.innerHTML = `х${powerHit}`
    inventorybBoxImg.style = 'display:block'
  }
})

let filed = document.querySelector('.field')
let tilee = document.querySelector('.tilee')
let resetGame = () => {
  while (filed.firstChild) {
    filed.removeChild(filed.firstChild)
  }
  score > 0 ? alert('Вы победили') : alert('Вы проиграли')
  filed.append(tilee)
  score = 100
  lineHe.style.width = `${score}%`

  // Противник 1
  tileE1.style = 'display:block'
  randomPositionTileE1 =
    randomPosition[Math.floor(Math.random() * randomPosition.length)]
  topPositionTileE1 = randomPositionTileE1[0]
  leftPositionTileE1 = randomPositionTileE1[1]
  tileE1.style.top = `${topPositionTileE1}px`
  tileE1.style.left = `${leftPositionTileE1}px`
  scoreTile1 = 100
  lineTile1 = document.querySelector('#health_tileE1')
  lineTile1.style.width = `${scoreTile1}%`

  // Противник 2
  tileE2.style = 'display:block'
  randomPositionTileE2 =
    randomPosition[Math.floor(Math.random() * randomPosition.length)]
  topPositionTileE2 = randomPositionTileE2[0]
  leftPositionTileE2 = randomPositionTileE2[1]
  tileE2.style.top = `${topPositionTileE2}px`
  tileE2.style.left = `${leftPositionTileE2}px`
  scoreTile2 = 100
  lineTile2 = document.querySelector('#health_tileE2')
  lineTile2.style.width = `${scoreTile2}%`

  // Противник 3
  tileE3.style = 'display:block'
  randomPositionTileE3 =
    randomPosition[Math.floor(Math.random() * randomPosition.length)]
  topPositionTileE3 = randomPositionTileE3[0]
  leftPositionTileE3 = randomPositionTileE3[1]
  tileE3.style.top = `${topPositionTileE3}px`
  tileE3.style.left = `${leftPositionTileE3}px`
  scoreTile3 = 100
  lineTile3 = document.querySelector('#health_tileE3')
  lineTile3.style.width = `${scoreTile3}%`

  // Противник 4
  tileE4.style = 'display:block'
  randomPositionTileE4 =
    randomPosition[Math.floor(Math.random() * randomPosition.length)]
  topPositionTileE4 = randomPositionTileE4[0]
  leftPositionTileE4 = randomPositionTileE4[1]
  tileE4.style.top = `${topPositionTileE4}px`
  tileE4.style.left = `${leftPositionTileE4}px`
  scoreTile4 = 100
  lineTile4 = document.querySelector('#health_tileE4')
  lineTile4.style.width = `${scoreTile4}%`

  // Противник 5
  tileE5.style = 'display:block'
  randomPositionTileE5 =
    randomPosition[Math.floor(Math.random() * randomPosition.length)]
  topPositionTileE5 = randomPositionTileE5[0]
  leftPositionTileE5 = randomPositionTileE5[1]
  tileE5.style.top = `${topPositionTileE5}px`
  tileE5.style.left = `${leftPositionTileE5}px`
  scoreTile5 = 100
  lineTile5 = document.querySelector('#health_tileE5')
  lineTile5.style.width = `${scoreTile5}%`

  // Противник 6
  tileE6.style = 'display:block'
  randomPositionTileE6 =
    randomPosition[Math.floor(Math.random() * randomPosition.length)]
  topPositionTileE6 = randomPositionTileE6[0]
  leftPositionTileE6 = randomPositionTileE6[1]
  tileE6.style.top = `${topPositionTileE6}px`
  tileE6.style.left = `${leftPositionTileE6}px`
  scoreTile6 = 100
  lineTile6 = document.querySelector('#health_tileE6')
  lineTile6.style.width = `${scoreTile6}%`

  // Противник 7
  tileE7.style = 'display:block'
  randomPositionTileE7 =
    randomPosition[Math.floor(Math.random() * randomPosition.length)]
  topPositionTileE7 = randomPositionTileE7[0]
  leftPositionTileE7 = randomPositionTileE7[1]
  tileE7.style.top = `${topPositionTileE7}px`
  tileE7.style.left = `${leftPositionTileE7}px`
  scoreTile7 = 100
  lineTile7 = document.querySelector('#health_tileE7')
  lineTile7.style.width = `${scoreTile7}%`

  // Противник 8
  tileE8.style = 'display:block'
  randomPositionTileE8 =
    randomPosition[Math.floor(Math.random() * randomPosition.length)]
  topPositionTileE8 = randomPositionTileE8[0]
  leftPositionTileE8 = randomPositionTileE8[1]
  tileE8.style.top = `${topPositionTileE8}px`
  tileE8.style.left = `${leftPositionTileE8}px`
  scoreTile8 = 100
  lineTile8 = document.querySelector('#health_tileE8')
  lineTile8.style.width = `${scoreTile8}%`

  // Противник 9
  tileE9.style = 'display:block'
  randomPositionTileE9 =
    randomPosition[Math.floor(Math.random() * randomPosition.length)]
  topPositionTileE9 = randomPositionTileE9[0]
  leftPositionTileE9 = randomPositionTileE9[1]
  tileE9.style.top = `${topPositionTileE9}px`
  tileE9.style.left = `${leftPositionTileE9}px`
  scoreTile9 = 100
  lineTile9 = document.querySelector('#health_tileE9')
  lineTile9.style.width = `${scoreTile9}%`

  // Противник 10
  tileE10.style = 'display:block'
  randomPositionTileE10 =
    randomPosition[Math.floor(Math.random() * randomPosition.length)]
  topPositionTileE10 = randomPositionTileE10[0]
  leftPositionTileE10 = randomPositionTileE10[1]
  tileE10.style.top = `${topPositionTileE10}px`
  tileE10.style.left = `${leftPositionTileE10}px`
  scoreTile10 = 100
  lineTile10 = document.querySelector('#health_tileE10')
  lineTile10.style.width = `${scoreTile10}%`

  tileHP1.style = 'display:block'
  tileHP2.style = 'display:block'
  tileHP3.style = 'display:block'
  tileHP4.style = 'display:block'
  tileHP5.style = 'display:block'
  tileHP6.style = 'display:block'
  tileHP7.style = 'display:block'
  tileHP8.style = 'display:block'
  tileHP9.style = 'display:block'
  tileHP10.style = 'display:block'

  let randomPositionTileHP1 =
    randomPosition[Math.floor(Math.random() * randomPosition.length)]
  let randomPositionTileHP2 =
    randomPosition[Math.floor(Math.random() * randomPosition.length)]
  let randomPositionTileHP3 =
    randomPosition[Math.floor(Math.random() * randomPosition.length)]
  let randomPositionTileHP4 =
    randomPosition[Math.floor(Math.random() * randomPosition.length)]
  let randomPositionTileHP5 =
    randomPosition[Math.floor(Math.random() * randomPosition.length)]
  let randomPositionTileHP6 =
    randomPosition[Math.floor(Math.random() * randomPosition.length)]
  let randomPositionTileHP7 =
    randomPosition[Math.floor(Math.random() * randomPosition.length)]
  let randomPositionTileHP8 =
    randomPosition[Math.floor(Math.random() * randomPosition.length)]
  let randomPositionTileHP9 =
    randomPosition[Math.floor(Math.random() * randomPosition.length)]
  let randomPositionTileHP10 =
    randomPosition[Math.floor(Math.random() * randomPosition.length)]

  // tileHP1
  tileHP1.style.top = `${randomPositionTileHP1[0]}px`
  tileHP1.style.left = `${randomPositionTileHP1[1]}px`

  // tileHP2
  tileHP2.style.top = `${randomPositionTileHP2[0]}px`
  tileHP2.style.left = `${randomPositionTileHP2[1]}px`

  // tileHP3
  tileHP3.style.top = `${randomPositionTileHP3[0]}px`
  tileHP3.style.left = `${randomPositionTileHP3[1]}px`

  // tileHP4
  tileHP4.style.top = `${randomPositionTileHP4[0]}px`
  tileHP4.style.left = `${randomPositionTileHP4[1]}px`

  // tileHP5
  tileHP5.style.top = `${randomPositionTileHP5[0]}px`
  tileHP5.style.left = `${randomPositionTileHP5[1]}px`

  // tileHP6
  tileHP6.style.top = `${randomPositionTileHP6[0]}px`
  tileHP6.style.left = `${randomPositionTileHP6[1]}px`

  // tileHP7
  tileHP7.style.top = `${randomPositionTileHP7[0]}px`
  tileHP7.style.left = `${randomPositionTileHP7[1]}px`

  // tileHP8
  tileHP8.style.top = `${randomPositionTileHP8[0]}px`
  tileHP8.style.left = `${randomPositionTileHP8[1]}px`

  // tileHP9
  tileHP9.style.top = `${randomPositionTileHP9[0]}px`
  tileHP9.style.left = `${randomPositionTileHP9[1]}px`

  // tileHP10
  tileHP10.style.top = `${randomPositionTileHP10[0]}px`
  tileHP10.style.left = `${randomPositionTileHP10[1]}px`

  tileSW1.style = 'display:block'
  tileSW2.style = 'display:block'

  // Мечи
  let randomPositionTileSW1 =
    randomPosition[Math.floor(Math.random() * randomPosition.length)]
  let randomPositionTileSW2 =
    randomPosition[Math.floor(Math.random() * randomPosition.length)]

  tileSW1.style.top = `${randomPositionTileSW1[0]}px`
  tileSW1.style.left = `${randomPositionTileSW1[1]}px`

  tileSW2.style.top = `${randomPositionTileSW2[0]}px`
  tileSW2.style.left = `${randomPositionTileSW2[1]}px`

  powerHit = 1
  inventory.innerHTML = ''
  inventorybBoxImg.style = 'display:none'
}

setInterval(
  (stepGame = () => {
    if (score < 0) {
      resetGame()
    }
    if (
      scoreTile1 < 0 &&
      scoreTile2 < 0 &&
      scoreTile3 < 0 &&
      scoreTile4 < 0 &&
      scoreTile5 < 0 &&
      scoreTile6 < 0 &&
      scoreTile7 < 0 &&
      scoreTile8 < 0 &&
      scoreTile9 < 0 &&
      scoreTile10 < 10
    ) {
      resetGame()
    }
  }),
  800
)
