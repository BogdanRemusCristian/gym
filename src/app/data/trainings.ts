import { Training } from '../models/training.type';

export const trainings: Training[] = [
  {
    name: 'Legs 1',
    exercises: [
      {
        name: 'Squat - Back',
        images: [
          'squat-back.gif',
          'squat-back2.gif',
          'squat-back3.gif',
          'squat-back.jpg',
        ],
        sets: 5,
        reps: 5,
      },
      {
        name: 'Leg Press',
        images: ['leg-press2.gif', 'leg-press.gif'],
        sets: 3,
        reps: 12,
      },
      {
        name: 'Stiff Leg Deadlift',
        images: ['STIFF_DL.gif', 'DB_STIFF_DL.gif'],
        sets: 4,
        reps: 10,
      },
      {
        name: 'Hamstring Curl',
        images: ['SEAT_LEG_CURL-1.gif', 'LEG_CURL.gif'],
        sets: 3,
        reps: 15,
      },
      {
        name: 'Press Calf Raises',
        images: ['Leg-Press-Calf-Raise.gif'],
        sets: 4,
        reps: 15,
      },
      {
        name: 'Seated Calf Raise',
        images: ['SEAT_CALF_RAISE.gif'],
        sets: 4,
        reps: 20,
      },
      {
        name: 'Knee Raises',
        images: ['captains-chair-knee-raise.gif', 'HANG_KNEE_RAISE.gif'],
        sets: 3,
        reps: 30,
      },
      {
        name: 'Abdominal Crunch Machine',
        images: ['ABS_CRUNCH_MC-1.gif'],
        sets: 3,
        reps: 30,
      },
      // {
      //   name: 'Gluteus Bridge',
      //   images: ['GLUTE_BRDG.gif'],
      //   sets: 3,
      //   reps: 12,
      // },
      {
        name: 'Plank',
        images: ['PLANK-2.gif'],
        sets: 3,
        reps: 0,
      },
    ],
  },
  {
    name: 'Push 1',
    exercises: [
      {
        name: 'Paused Bench',
        images: ['BB_BP-1.gif'],
        sets: 5,
        reps: 5,
      },
      {
        name: 'Overhead Press',
        images: ['BB_PRESS.gif'],
        sets: 3,
        reps: 5,
      },
      {
        name: 'Dumbbell Bench Press',
        images: ['DB_BP.gif'],
        sets: 3,
        reps: 12,
      },
      {
        name: 'Dumbbell Fly',
        images: ['DB_FLY.gif'],
        sets: 3,
        reps: 12,
      },
      {
        name: 'Dumbbell Lateral Raise',
        images: ['DB_LAT_RAISE-1.gif'],
        sets: 3,
        reps: 12,
      },
      {
        name: 'Skull Crusher',
        images: ['SKULL_CRUSH.gif', 'Incline-Ez-Skull-Crusher.gif'],
        sets: 3,
        reps: 10,
      },
      {
        name: 'Cable Push Down',
        images: ['CABLE_PUSH_DOWN.gif'],
        sets: 3,
        reps: 10,
      },
    ],
  },
  {
    name: 'Pull 1',
    exercises: [
      // {
      //   name: 'Weighted Pullups',
      //   images: ['WEI_PULL_UP.gif'],
      //   sets: 5,
      //   reps: 5,
      // },
      {
        name: 'Assisted Pull Up Machine',
        images: ['ASS_PULLUP_MC.gif'],
        sets: 5,
        reps: 5,
      },
      {
        name: 'T-Bar Row',
        images: [
          'T_BAR_ROW_MAC.gif',
          '7a78c33be3fde48ecda98f3bb89cdf27_how_to_do_t_bar_rows_gif___Google_Search.webp',
        ],
        sets: 4,
        reps: 12,
      },
      {
        name: 'Lat Pull Down',
        images: ['LAT_PULL_DOWN.gif'],
        sets: 3,
        reps: 12,
      },
      {
        name: 'Rear-Delt Fly',
        images: ['DB_BO_LAT_RAISE.gif', 'Rear-Delt-Machine-Flys.gif'],
        sets: 3,
        reps: 12,
      },
      {
        name: 'Barbell Shrug',
        images: ['BB_SHRUG.gif'],
        sets: 3,
        reps: 12,
      },
      {
        name: 'EZ Bar Curl',
        images: ['EZB_CURL.gif'],
        sets: 3,
        reps: 10,
      },
      {
        name: 'Incline Dumbbell Curl',
        images: ['INC_DB_CURL.gif'],
        sets: 3,
        reps: 12,
      },
    ],
  },
  {
    name: 'Legs 2',
    exercises: [
      {
        name: 'Squat - Front',
        images: ['BB_FSQ-1.gif'],
        sets: 5,
        reps: 5,
      },
      {
        name: 'Lunges',
        images: ['LUNGE.gif'],
        sets: 3,
        reps: 12,
      },
      {
        name: 'Hyperextension',
        images: ['HPET.gif'],
        sets: 3,
        reps: 12,
      },
      {
        name: 'Leg Extensions',
        images: ['LGE_EXT-1.gif'],
        sets: 3,
        reps: 12,
      },
      {
        name: 'Seated Calf Raise',
        images: ['SEAT_CALF_RAISE.gif'],
        sets: 3,
        reps: 0,
      },
      {
        name: 'Standing Calf Raise',
        images: ['STD_CALF_RAISE-1.gif'],
        sets: 3,
        reps: 0,
      },
      {
        name: 'Leg Raises',
        images: ['LEG_RAISE.gif'],
        sets: 3,
        reps: 12,
      },
      {
        name: 'Weighted Crunch',
        images: ['CRUNCH.gif', 'WEI_DEC_CRUNCH.gif'],
        sets: 3,
        reps: 20,
      },
      {
        name: 'Cable Twist',
        images: ['CABLE_TWIST.gif'],
        sets: 3,
        reps: 20,
      },
    ],
  },
  {
    name: 'Push 2',
    exercises: [
      {
        name: 'Incline Bench',
        images: ['BB_INC_PRESS.gif'],
        sets: 5,
        reps: 5,
      },
      {
        name: 'Incline DB Press',
        images: ['INC_BP_MAC.gif', 'DB_INC_BP.gif'],
        sets: 3,
        reps: 12,
      },
      {
        name: 'DB Shoulders Press',
        images: ['SEAT_DB_SHD_PRESS.gif'],
        sets: 3,
        reps: 12,
      },
      {
        name: 'Lower Cable Flyes',
        images: ['LP_CABLE_FLY.gif'],
        sets: 3,
        reps: 12,
      },
      {
        name: 'Cable Side Raises',
        images: ['OA_CABLE_LAT_RAISE.gif'],
        sets: 3,
        reps: 12,
      },
      {
        name: 'Weighted Dips',
        images: ['WEI_DIPS.gif'],
        sets: 3,
        reps: 10,
      },
      {
        name: 'DB Overhead Ext',
        images: ['DB_TRI_EXT.gif'],
        sets: 3,
        reps: 12,
      },
    ],
  },
  {
    name: 'Pull 2',
    exercises: [
      {
        name: 'Rack Pull / Deadlift',
        images: [
          'SM_DL.gif',
          'STIFF_DL.gif',
          'PAUSE_DL.gif',
          'RM_BB_DL.gif',
          'BB_DL.gif',
        ],
        sets: 3,
        reps: 5,
      },
      {
        name: 'Barbell Row',
        images: ['PAUSE_BB_ROW.gif', 'T_BAR_ROW_MAC.gif'],
        sets: 3,
        reps: 12,
      },
      {
        name: 'Pulldown',
        images: [
          'LAT_PULL_DOWN.gif',
          'MAG_LAT_PULL_DOWN.gif',
          'PAR_LAT_PULL_DOWN.gif',
          'REV_LAT_PULL_DOWN.gif',
        ],
        sets: 3,
        reps: 12,
      },
      {
        name: 'Machine Row',
        images: ['MC_LOW.gif', 'LOW_ROW_MC.gif'],
        sets: 3,
        reps: 12,
      },
      {
        name: 'Facepull',
        images: ['FACE_PULL-1.gif'],
        sets: 4,
        reps: 12,
      },
      {
        name: 'Preacher Curl',
        images: ['PREA_CURL_MAC.gif', 'EZ_PREA_CURL.gif', 'BB_PREA_CURL.gif'],
        sets: 3,
        reps: 10,
      },
      {
        name: 'Reverse BB Curl',
        images: ['REV_BB_CURL.gif', 'REV_BB_WRIST_CURL.gif'],
        sets: 3,
        reps: 12,
      },
    ],
  },
];
