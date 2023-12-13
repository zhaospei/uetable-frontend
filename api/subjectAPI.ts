import { SubjectAll, SubjectClass } from "@/types/subject";
import { mockAllSubjects, mockSubjectClasses } from "./mocks/subject";
import { delay } from "@/utils/delay";
import _ from "lodash";

export function getSubjectClasses(): SubjectClass[] {
  return mockSubjectClasses;
}

export class SubjectAPI {
  static async getAllSubject(
    sortBy: "stared" | "rating" | "last-access",
    from: number,
    to: number,
    searchValue: string
  ): Promise<SubjectAll[]> {
    // console.log(sortBy)
    await delay(1000);
    // console.log(from, to)
    // console.log({from, to})
    return Math.random() < 0.5 ? mockAllSubjects : [];
  }

  static async starSubject(subjectId: string, star: boolean) {
    await delay(1500);
  }

  static async getRelatedSubject(subjectId: string, from: number, to: number): Promise<SubjectAll[]> {
    await delay(2000);
    return mockAllSubjects;
  }

  static async getSubjectById(subjectId: string): Promise<SubjectAll> {
    await delay(2000);
    let data: SubjectAll = {
      id: "HIS1001",
      name: "Lịch sử Đảng Cộng sản Việt Nam",
      credits: 2,
      type: "registered",
      letterGrade: "A+",
      like: 6,
      documents: 652,
      stared: true,
      lecturers: [{
        name: 'Bùi Huy Dược',
        email: 'hduoc2003@gmail.com'
      }, {
        name: 'Dũng Bùi Tuấn'
      }, {
        name: 'Phạm Anh Việt Gia',
        email: ':V@gmail.com'
      }]
    };
    return data;
  }

  static async getDocuments(sortBy: 'latest' | 'rating', from: number, to: number) {

  }
}