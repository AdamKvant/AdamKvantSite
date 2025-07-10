---
title: Git Integration for Power Platform
date: 2025-06-03
---
<br>

![Cover Image](0/GitPP.png)

## Introduction

Microsoft has recently released a preview feature for Git Integration in the Power Platform. This addition marks yet another step forward in enabling organizations to bring source control into their low-code/no-code development environments. As the Power Platform continues to grow in adoption and complexity, the need for structured and version-controlled development becomes increasingly important.

Throughout this blog, I hope to emphasize why Git Integration and source control are critical components of modern solution development. I’ll walk through the benefits this feature brings to the table, highlight some of the current limitations you should be aware of, and provide a practical guide to help you get familiar with the user interface.

## Benefits

The new Git integration provides near seamless synchronization of solutions and solution objects across multiple Dataverse environments. This enables efficient collaboration and deployment through the use of disposable dev environments, which can be merged back into the main development environment when they are complete. This is similar to the branching model that pro-code developers use in Azure DevOps or GitHub. Power Platform's new source control integration is also tightly integrated with Azure DevOps and easy to set up, leveraging Git to track and audit changes to components and solutions. Restoring a previous version of the environment/solution is straightforward, providing flexibility and version safety. Solution components are stored in a human-readable format in a single location within Azure DevOps, avoiding duplication across solutions and simplifying management.

## Limitations

For all that the new Git Integration feature provides the Power Platform, it still has some limitations. Some unsupported solution types are: Patch, Managed, and the Default solution. There are also a myriad of solution components that are unsupported by this new integration such as PCF controls, custom connectors, classic workflows, and column security profiles. There is also a lack of advanced merge conflict resolution menus, which can lead to some frustration when running into merge conflicts. Lastly, the most major limitation is that duplicate components cannot exist across solutions, this will prevent you from committing to DevOps.

## Source Control Bindings

There are two ways you can bind your Power Platform instance to source control: Environment Binding and Solution Binding. From a high level, Environment binding is safer and requires less maintenance from the developers. While Solution Binding is more customizable, but requires more upkeep on the development side.

### Environment Binding

Environment Binding is the Microsoft recommended default binding, and is easy to set up. Environment Binding makes all content within the Git-integrated environment tie to a single repository and directory. Any unmanaged changes made within a custom unmanaged solution are stored in one directory. Additionally, a file located in the root directory logs which solution each component belongs to. Unmanaged solutions under Environment Binding automatically sync with DevOps.

### Solution Binding

Solution Binding maps unmanaged solutions in an environment to separate repositories or directories. It offers more flexibility in how repositories are laid out within the environment compared to Environment Binding, but it does require more setup time and ongoing management. With Solution Binding, solutions can be bound to different locations, however, a component cannot exist in more than one solution. Unlike Environment Binding, Solution Binding doesn’t require selecting a solution or repository during the initial Git integration setup. Instead, the repository and directory are chosen when the solution is ready to be bound to source control.

## Source Control Operations

All of the source control operations occur within the Power Apps Maker Portal, with no need to enter a command line interface or code editor.

### Viewing Changes in the Solutions Area

To view changes made to an unmanaged solution, start by navigating to the Solutions area within Power Apps. Once there, open the specific solution you're working with and select the Source Control option from the left-hand navigation menu. This will bring up the Source Control screen, where you can see all the changes that are available to be committed to Azure DevOps. If you’ve made recent updates in the environment, use the Refresh button to ensure everything is up to date. Additionally, the Check for Updates button allows you to pull in any updates that may exist in DevOps, ensuring your local environment stays in sync.

### Conflict Resolution

When working with source control, conflicts can arise between the current environment and DevOps. These are displayed under the Conflicts tab, which lists all known conflicts between DevOps and the local environment. Before you can push any changes to DevOps, all conflicts must be resolved. This process is very similar to how developers handle merge conflicts when working with GitHub or DevOps in pro-code environments, while also having the limitations mentioned earlier.

### Committing and Pulling Changes

To pull changes from DevOps, navigate to the Updates tab. Review the listed updates, and when ready, click the Pull button to bring them into your environment. On the other hand, to commit your changes, go to the Changes tab. After reviewing the modifications, click the Commit button, enter a meaningful commit message, and then confirm by pressing Commit again. This ensures your updates are properly documented and pushed to DevOps.

## Git Integration for Power Platform Setup

### Prerequisites

There are a few prerequisites that must be met before Git Integration for Power Platform can be set up. If you do not have access to Azure subscriptions and licenses, you should contact your administrator.

* The main development environment must be a Managed Environment.
* Azure DevOps Subscriptions and licenses for ALL users that interact with source control.
* Azure DevOps Services permission for making commits and reading source files is required. Members of the Contributors security group have permission.
* Users with System Administrator security roles can connect an environment to Git integration.

### Setup Steps

Microsoft has done a great job at documenting the setup steps for this Git Integration, each step of the setup process will be linked below.

<ul>
  <li><a href="https://learn.microsoft.com/en-us/power-platform/alm/git-integration/connecting-to-git#azure-devops-setup" target="_blank" rel="noopener noreferrer">Azure DevOps Setup</a></li>
  <li><a href="https://learn.microsoft.com/en-us/power-platform/alm/git-integration/connecting-to-git#connect-dataverse-to-git" target="_blank" rel="noopener noreferrer">Dataverse/Power Platform Setup</a></li>
  <li><a href="https://learn.microsoft.com/en-us/power-platform/alm/git-integration/connecting-to-git#binding-a-solution-to-a-repository-and-folder-when-using-the-solution-binding-strategy" target="_blank" rel="noopener noreferrer">Binding a Solution to a Repository and Directory</a></li>
  <li><a href="https://learn.microsoft.com/en-us/power-platform/alm/git-integration/connecting-to-git#validate-your-connection" target="_blank" rel="noopener noreferrer">Validating the Git Connection</a></li>
</ul>


## Conclusion

While this Git Integration for Power Platform is a great way to connect environments and solutions to version control, I cannot recommend it for large scale implementations. There are many limitations in the form of unsupported components, unsupported environment types, and an overly simple conflict resolution editor. The largest concern I have is through the conflict resolution editor, as it should contain more details in the differences between the local and repository components. This gives the developer more context into the changes, so they can be resolved appropriately. It is important to note that this feature is in *preview*, so I am optimistic that it will improve before its full release. When this feature is fully fleshed out, the new Git Integration for Power Platform will become a staple for all Power Platform projects in the future.
