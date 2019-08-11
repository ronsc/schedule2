export interface DayTimeRoom {
  day: string;
  time: string;
  room: string;
}

export interface Course {
  id: string;
  code: string;
  href: string;
  acadyear: string;
  semester: string;
  name: string;
  remark: string;
  teachers: string[];
  unit: string;
  dayTimes: DayTimeRoom[];
  section: string;
  status: string;
  exam: {
    mid: DayTimeRoom;
    final: DayTimeRoom;
  };
}
