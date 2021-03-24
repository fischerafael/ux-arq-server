type ProjectId = string
type ProjectVisibility = string
type ProjectStage = string // reference | project
type ProjectName = string
type ProjectLocation = string
type ProjectThumbnail = string
type ProjectCategory = string[]
type ProjectOwner = string

export interface IReferencePrivateCreateBody {
    name: ProjectName
    location: ProjectLocation
    thumbnail: ProjectThumbnail
    category: ProjectCategory
    visibility: ProjectVisibility
}

export interface IReferencePrivateCreateParams {
    owner: ProjectOwner
}

export interface IReferencePublicCreateRepository
    extends IReferencePrivateCreateBody,
        IReferencePrivateCreateParams {
    stage: ProjectStage
    visibility: ProjectVisibility
}
