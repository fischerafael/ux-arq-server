type ProjectId = string
type ProjectVisibility = string
type ProjectStage = string // reference | project
type ProjectName = string
type ProjectLocation = string
type ProjectThumbnail = string
type ProjectOwner = string

export interface IReferencePrivateCreateBody {
    name: ProjectName
    location: ProjectLocation
    thumbnail: ProjectThumbnail
    visibility: ProjectVisibility
    features: IProjectFeaturesPrivateCreateBody
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

type ZeroOrOne = boolean

export interface IProjectFeaturesPrivateCreateBody {
    type: ZeroOrOne // interior - transition - exterior
    terrain: ZeroOrOne // plain - inclined
    projectHeightLow: ZeroOrOne // ground level - high ground
    projectSize: ZeroOrOne // Small to XXL
    cover: ZeroOrOne // Low - High - None
    opennings: ZeroOrOne // close - full open
    composition: ZeroOrOne // straigh, organic , curvy
    architecturalElementsAmount: ZeroOrOne // few, many
    architecturalElementsVariety: ZeroOrOne
    architecturalElementsOrganisation: ZeroOrOne
    material: ZeroOrOne // artificial - natural
    texture: ZeroOrOne // smooth - rough
    tone: ZeroOrOne // grey - vivid - pastel
    lightItensity: ZeroOrOne // 0 - Dark / 1 - shine
    lightDistribution: ZeroOrOne // 0 - Nenhuma / Concentrada / Espalhada / 1 - Difusa
    ligthSource: ZeroOrOne // 0 - artificial - natural
    ligthTemperature: ZeroOrOne // 0 - artificial - natural
    soundIntensity: ZeroOrOne // 0 none - 1 too much
    soundFrequency: ZeroOrOne // 0 none - 1 too much
    soundQuality: ZeroOrOne // 0 bad - 1 good
    flavorIntensity: ZeroOrOne // 0 none - 1 too much
    flavorFrequency: ZeroOrOne // 0 none - 1 too much
    flavorQuality: ZeroOrOne // 0 bad - 1 good
    elementsAmount: ZeroOrOne // 0 none - 1 too much
    elementsVariety: ZeroOrOne // 0 none - 1 too much
    elementsDisposition: ZeroOrOne // 0 chaos - 1 organized
    contextDensity: ZeroOrOne // 0 - savage / rural / low dense / 1 - high dense
    population: ZeroOrOne // 0 - none - 1 intense
    movement: ZeroOrOne // 0 - none - 1 intense
    period: ZeroOrOne // 0 - nigth - 1 day
    wind: ZeroOrOne // 0 - no - 1 - storm
    weather: ZeroOrOne // 0 - no clouds - 1 - snow (no clouds, some clouds, cloudy, rain, fog, snow)
    temperature: ZeroOrOne // 0 -50 - 1 + 50
    contextInterest: ZeroOrOne // 0 - none - 1 - landmark

    colorRed: ZeroOrOne
    colorOrange: ZeroOrOne
    colorYellow: ZeroOrOne
    colorGreen: ZeroOrOne
    colorBlue: ZeroOrOne
    colorPurple: ZeroOrOne
    colorPink: ZeroOrOne

    live: ZeroOrOne
    workAndStudy: ZeroOrOne
    reacreationAndLeisure: ZeroOrOne
    mandatory: ZeroOrOne
}
