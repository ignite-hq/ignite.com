export interface ProjectLink {
  type: 'twitter' | 'discord' | 'telegram'
  display: boolean
  url: string
}

export interface ProjectMember {
  name: string
  title: string
  description: string
}

export interface ProjectDistribution {
  title: string
  share: string
}

export enum RoadmapStatus {
  Completed = 'completed',
  Active = 'active',
  Expected = 'expected'
}

export interface ProjectMilestone {
  title: string
  /**
   * Date with format YYYY-MM-DD
   */
  date: string
  description?: string
  status: RoadmapStatus
}

export interface ProjectWhitepaper {
  url: string
}

export interface InnerProjectYaml {
  whitepaper: ProjectWhitepaper
  roadmap: {
    milestones: ProjectMilestone[]
  }
  tokenomics: {
    distribution: ProjectDistribution[]
  }
  team: {
    members: ProjectMember[]
  }
  social_links: ProjectLink[]
}

export interface ProjectYaml {
  project: InnerProjectYaml
}
