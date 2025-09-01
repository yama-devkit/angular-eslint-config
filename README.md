# Angular Eslint configuration

An opinionated linter that supports Angular.

## Installation

Delete your eslint plugin dependencies in your package.json file, then install eslint by running the following command:

```shell
ng add angular-eslint
```

Then install the shared eslint configuration by running the following command:

```shell
npm install --save-dev @yama-devkit/angular-eslint-config
```

## Usage

Open your `eslint.config.mjs` file and add the following line at root:

```javascript
import config from '@yama-devkit/angular-eslint-config';
import tsEslint from 'typescript-eslint';

export default tsEslint.config(...config);
```

then run the following command to lint your code:

```shell
ng lint
```
