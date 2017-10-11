export interface IDailyTasks {
    TaskId: number;
	FarmID: number;
	Type: string;
	CreatedBy: string;
	SCSFarmLabel: string;
	ThreadCount: number;
	State: string;
	ProgressValue: number;
	ProgressHasDoneProgress: string;
	ProgressLastActivity: string;
	ResultCode: string;
	ResultMessage: string;
	ScheduledAt: Date;
	StartedAt: Date;
	CompletedAt: Date;
	RecurrenceInterval: string;
	ExecutionTimeInHours: string;
	OutputDocsRefed: number;
	OutputDocsCleaned: number;
	OutputTimeCompletedMoves: Date;
	OutputTimeCompletedCleanup: Date;
	OutputCurrentStep: number;
	ProgressMessage: string;
}
