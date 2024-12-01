export type WorkType = {
    id: "learn-by-typing" | "induction-course-quiz" | "schedule-matching-app" | "my-engineer-portfolio" | "baseball-game" | "shooting-game";
    title: string;
    platform: string;
    usedService: string[];
    description: string;
    githubUrl?: string;
	date: string;
	team: string;
	role: string;
	serviceUrl?: string;
	imageCount: number;
	topContentType?: "gif" | "webm";
};