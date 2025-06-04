---
title: Git Integration for Power Platform Overview
date: 2025-06-03
---
<img src="0/GitPP.png" alt="Cover Image">

## Introduction

Microsoft has recently released a preview feature for Git Integration in the Power Platform. This addition marks yet another step forward in enabling organizations to bring source control into their low-code/no-code development environments. As the Power Platform continues to grow in adoption and complexity, the need for structured and version-controlled development becomes increasingly important.

Throughout this blog, I hope to emphasize why Git Integration and source control are critical components of modern solution development. I’ll walk through the benefits this feature brings to the table, highlight some of the current limitations you should be aware of, and provide a practical guide to help you get started with setting it up in your own environments and solutions.

## Benefits

The new Git integration provides near seamless synchronization of solutions and solution objects across multiple Dataverse environments. This enables efficient collaboration and deployment through the use of disposable dev environments, which can be merged back into the main development environment when they are complete. This is similar to the branching model that pro-code developers use in Azure DevOps or GitHub. Power Platform's new source control integration is also tightly integrated with Azure DevOps and easy to set up, leveraging Git to track and audit changes to components and solutions. Restoring a previous version of the environment/solution is straightforward, providing flexibility and version safety. Solution components are stored in a human-readable format in a single location within Azure DevOps, avoiding duplication across solutions and simplifying management.

## Limitations

For all that the new Git Integration feature provides the Power Platform, it still has some limitations. Some unsupported solution types are: Patch, Managed, and the Default solution. There are also a myriad of solution components that are unsupported by this new integration such as PCF controls, custom connectors, classic workflows, and column security profiles. There is also a lack of advanced merge conflict resolution menus, which can lead to some frustration when running into merge conflicts. Lastly, the most major limitation is that duplicate components cannot exist across solutions, this will prevent you from committing to DevOps.