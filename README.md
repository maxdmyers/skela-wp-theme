<p align="center">
  <img src="https://i.imgur.com/2GdqkHG.png" alt="Skela" style="display: block; margin: 0 auto">
<p>

# Skela

> Skela is an opinionated but still fairly barebones WordPress theme

Skela is an opinionated but still fairly barebones WordPress theme. Skela utilizes repositories, managers, services and models for a very object-oriented approach to organizing your WordPress data (more on that [here](#-object-oriented-approach)).

<a href="https://snyk.io/test/github/Upstatement/skela-wp-theme?targetFile=package.json"><img src="https://snyk.io/test/github/Upstatement/skela-wp-theme/badge.svg?targetFile=package.json" alt="Known Vulnerabilities" data-canonical-src="https://snyk.io/test/github/Upstatement/skela-wp-theme?targetFile=package.json" style="max-width:100%;"></a>

## Table of Contents

- [Skela](#skela)
  - [Table of Contents](#table-of-contents)
  - [What's in the Box](#-whats-in-the-box)
  - [System Requirements](#-system-requirements)
  - [Installation](#-installation)
  - [Getting Started](#-getting-started)
  - [Object-Oriented Approach](#-object-oriented-approach)
  - [Gutenberg](#-gutenberg)
  - [Contributing](#c-ontributing)
  - [Code of Conduct](#c-ode-of-conduct)
  - [About Upstatement](#-about-upstatement)

## 🎁 What's in the Box

- Full [Timber](https://www.upstatement.com/timber/) integration (of course)
- Built-in support for [Ups Dock](https://github.com/Upstatement/ups-dock), so you can get a full WordPress site up a running with a few commands
- Easy documentation creation with [Flatdoc](http://ricostacruz.com/flatdoc/)
- Webpack via [Laravel Mix](https://github.com/JeffreyWay/laravel-mix)
  - Comes packed with [autoprefixer](https://github.com/postcss/autoprefixer), [vendor file extraction](https://laravel-mix.com/docs/4.0/extract), [Browsersync](https://www.browsersync.io/)!
- Some really great WordPress plugins (and plugin management provided by [Composer](https://getcomposer.org/))
  - [Advanced Custom Fields (ACF)](https://www.advancedcustomfields.com/)
  - [WP Migrate DP Pro](https://deliciousbrains.com/wp-migrate-db-pro/)
  - [WP Environment Indicator](https://github.com/jon-heller/wp-environment-indicator)
- Some useful PHP libraries
  - [phpdotenv](https://github.com/vlucas/phpdotenv)
  - [carbon](https://carbon.nesbot.com/)
  - [whoops](https://github.com/filp/whoops)
- Linting and testing
  - JS, and PHP linting thanks to [Prettier](https://github.com/prettier/prettier), [ESLint](https://eslint.org/), and [phpcs](https://github.com/squizlabs/PHP_CodeSniffer)
  - Accessibility testing with [pa11y](https://github.com/pa11y/pa11y)
  - Bundle size limiting with [bundlesize](https://github.com/siddharthkp/bundlesize)
  - [Husky](https://github.com/typicode/husky) to automatically run these lints and tests!
- CI setup for [Travis](https://travis-ci.com/) (with [deployment](scripts/deploy.sh))

## 💻 System Requirements

Before you can start on your theme, you first need a way to run a LAMP/LEMP (Linux, Apache/nginx, MySQL, PHP) stack on your machine.

We recommend our very own Docker setup, we neatly packed into something called Ups Dock. To install it follow these steps:

1. Install [Docker for Mac](https://www.docker.com/docker-mac)

2. Install [ups-dock](https://github.com/upstatement/ups-dock)

## 🛠 Installation

### Updating theme name

In order to make this theme your own, do a **case-sensitive** search-and-replace of

- `skela`
- `Skela`
- `SKELA`

with your new and exciting theme name!

### ACF and WP Migrate DB Pro

If you would like to use the [Advanced Custom Fields (ACF)](https://www.advancedcustomfields.com/) and [WP Migrate DP Pro](https://deliciousbrains.com/wp-migrate-db-pro/) plugins, use the following steps:

1. Purchase license keys from [ACF](https://www.advancedcustomfields.com/pro/#pricing-table) and [WP Migrate DB Pro](https://deliciousbrains.com/wp-migrate-db-pro/pricing/)

2. In `composer.json`, search-and-replace `ACF_KEY` and `WP_MIGRATE_KEY` with the respective license keys

_Note: if opting out of one or both of these plugins, **remove** the desired entries from the `repositories` and `require` sections in `composer.json`_

### Setup

1. Ensure [NVM](https://github.com/creationix/nvm) and [NPM](https://www.npmjs.com/) are installed globally.

2. Run `nvm install` to ensure you're using the correct version of Node.

   _Note: If you are switching to projects with other versions of Node, we recommend using something like [Oh My Zsh](https://github.com/robbyrussell/oh-my-zsh) which will automatically run `nvm use`_

3. Run `composer update`

4. Copy the `.env.sample` into a new `.env` file

5. Run the install command:

   ```shell
   $ ./bin/install
   ```

Once completed, you should be able to access your WordPress installation via [`ups.dock`](http://ups.dock)!

If prompted for a login, the default in your `.env` file is `admin / password`

## 🏃‍ Getting Started

### Development workflow

1. Run `nvm use` to ensure you're using the correct version of Node

2. Run the start command to start the backend / static build server:

   ```shell
   $ ./bin/start
   ```

3. Open the `Local` URL that appears below `[Browsersync] Access URLs:` in your browser (https://localhost:3000/)

Quitting this process (`Ctrl-C`) will shut down the container.

### Common `wp-cli` commands

If you've installed this theme using `ups-dock`, you can run `wp-cli` by typing `./wp-docker [command]`

```shell
$ docker-compose exec wordpress wp [command]
```

To export the databse, use the following command:

```shell
$ docker-compose exec wordpress wp db export - > dbdump.sql
```

To SSH into the WordPress container, use the following command:

```shell
$ docker-compose exec wordpress /bin/bash
```

## 🔄 Object-Oriented Approach

Skela utilizes repositories, managers, services and models for a very object-oriented approach to organizing your WordPress data.

### Managers

Managers do things like:

- set up your theme (register option pages, hide dashboard widgets, enqueue JS and CSS, etc.)
- create custom post types and taxonomies
- set up basic WordPress defaults

### Models

Models hold and extend your data.

Have a press release post type that needs a bunch of extra functions? Create a class for them (extending `Timber\Post`) and put your logic there so you can keep your Twig clean!

### Repositories

Repositories are a good place to put query related logic.

It could be used in situations like the following:

> Let get me all the posts from September in the hot dog category!

### Services

Services are for more low-lying functions, like routing.

## 📰 Gutenberg

Skela has built-in support for easily creating custom Gutenberg blocks with the help of Advanced Custom Fields. Note that the pro version of ACF is required for this.

There is an example custom block under `src/Blocks/SampleACFBlock/ACFBlock.php`. This demonstrates creating a block using ACF functions that includes two fields. Those fields are rendered in the file `templates/components/acf-block.twig`.

Note that in order to get this example to work, you need to create a ACF field group containing two fields, `some_headline` and `some_text`, and then have the field group displayed if the block is equal to ACF block.

Read more details on [creating Gutenberg blocks using ACF](https://www.advancedcustomfields.com/resources/blocks/)

### Included Custom Blocks

Two custom Gutenberg blocks are included with Skela:

- Related Articles
- Image Layout

These include basic styles so they can work out of the box. They _require_ the Advanced Custom Field plugin to function. If you do not plan to use ACF, you can disable these blocks by removing the applicable lines in the constructor function of `/src/Blocks/Blocks.php`

These fields are managed using PHP in the file `/src/Managers/ACFManager.php`. You can make updates to the fields here. If you would rather using the ACF to make updates to these fields:

1. Under `Advanced Custom Fields -> Tools`, import the JSON file in `/gutenberg-acf-backups/`
2. Make updates to the fields
3. Go to `Advanced Custom Fields -> Tools` and generate the PHP code
4. Update the PHP code in `/src/Managers/ACFManager.php`. Make sure to only update the PHP code for one layout group at a time, as they are separated by function in the manager file.

## 👨‍👩‍👧‍👦 Contributing

We welcome all contributions to our projects! Filing bugs, feature requests, code changes, docs changes, or anything else you'd like to contribute are all more than welcome! More information about contributing can be found in the [contributing guidelines](.github/CONTRIBUTING.md).

## 📗 Code of Conduct

Upstatement strives to provide a welcoming, inclusive environment for all users. To hold ourselves accountable to that mission, we have a strictly-enforced [code of conduct](CODE_OF_CONDUCT.md).

## <img src="https://www.upstatement.com/static/img/favicon/favicon-32x32.png" width="32" /> About Upstatement

[Upstatement](https://www.upstatement.com/) is a digital transformation studio headquartered in Boston, MA that imagines and builds exceptional digital experiences. Make sure to check out our [services](https://www.upstatement.com/services/), [work](https://www.upstatement.com/work/), and [open positions](https://www.upstatement.com/jobs/)!
