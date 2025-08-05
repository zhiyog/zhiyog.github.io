export interface RouteConfig {
  title: string;
  href: string;
  noLink?: boolean;
  description?: string;
  items?: RouteConfig[];
}

export const page_routes: RouteConfig[] = [
  {
    title: "Getting Started",
    href: "/getting-started",
    items: [
      {
        title: "Installation",
        href: "/installation",
        description: "How to install and set up Git"
      },
      {
        title: "Configuration",
        href: "/configuration",
        description: "Basic Git configuration"
      }
    ]
  },
  {
    title: "Basic Commands",
    href: "/basic-commands",
    items: [
      {
        title: "Repository Basics",
        href: "/repository-basics",
        description: "Creating and cloning repositories"
      },
      {
        title: "Staging and Committing",
        href: "/staging-committing",
        description: "Adding and committing changes"
      },
      {
        title: "Branching",
        href: "/branching",
        description: "Working with branches"
      }
    ]
  },
  {
    title: "Advanced Topics",
    href: "/advanced",
    items: [
      {
        title: "Merging",
        href: "/merging",
        description: "Merge strategies and conflict resolution"
      },
      {
        title: "Rebasing",
        href: "/rebasing",
        description: "Rewriting commit history"
      },
      {
        title: "Hooks",
        href: "/hooks",
        description: "Automating tasks with Git hooks"
      }
    ]
  },
  {
    title: "GitHub Integration",
    href: "/github",
    items: [
      {
        title: "Pull Requests",
        href: "/pull-requests",
        description: "Creating and managing pull requests"
      },
      {
        title: "Issues",
        href: "/issues",
        description: "Tracking bugs and feature requests"
      },
      {
        title: "Actions",
        href: "/github-actions",
        description: "Automating workflows with GitHub Actions"
      }
    ]
  }
];
