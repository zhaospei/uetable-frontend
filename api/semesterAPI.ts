import { SemesterChangeLog, SemesterInfo } from "@/types/semester";
import { mockAllSemesterInfo } from "./mocks/semester";
import { RegisteredSubject } from "@/types/subject";
import Fetcher from "./Fetcher";
import { delay } from "@/utils/delay";

interface Data1 {
    totalGPA: number
    semesterInfo: SemesterInfo[]
}
export class SemesterAPI {
    static async getAllSemesterInfo(): Promise<Data1> {
        return {
            totalGPA: 5,
            semesterInfo: mockAllSemesterInfo
        }
        // await delay(2000)
        // console.log(mockAllSemesterInfo)
        try {
            let data = await Fetcher.get<unknown, Data1>('/score/getAllSemesterInfo');
            return data;
        } catch (error) {
            console.log(error)
            throw error
        }

    }

    static async updateSemester(data: SemesterInfo): Promise<{
        totalGPA: number
    }> {
        await delay(2000)
        return {
            totalGPA: 100
        }
    }

    static async getStat(subjects: SemesterInfo['subjects']): Promise<Pick<SemesterInfo, 'sumOfCredits' | 'yearGPA' | 'semesterGPA'>> {
        await delay(1000);
        return {
            sumOfCredits: 5,
            yearGPA: Math.random(),
            semesterGPA: 4
        }
    }

    static async addSemester(): Promise<{
        semesterId: string
    }> {
        return {
            semesterId: '1'
        }
    }

    static async deleteSemester(semesterId: string): Promise<void> {
        await delay(2000);
    }
}