type EvaluationId = string
type EvaluationEvaluator = string
type EvaluationProject = string

type EvaluationHasVisited = number
type EvaluationHasSeen = number

type EvaluationScoreResting = number
type EvaluationScoreWork = number
type EvaluationScoreDevelopment = number
type EvaluationScoreRecreation = number
type EvaluationScoreMandatory = number

export interface IEvaluationCreateBody {
    hasVisited: EvaluationHasVisited
    hasSeen: EvaluationHasSeen
    resting: EvaluationScoreResting
    work: EvaluationScoreWork
    development: EvaluationScoreDevelopment
    recreation: EvaluationScoreRecreation
    mandatory: EvaluationScoreMandatory
}

export interface IEvaluationCreateParams {
    evaluator: EvaluationEvaluator
    project: EvaluationProject
}

export interface IEvaluationCreateRepository
    extends IEvaluationCreateBody,
        IEvaluationCreateParams {}
