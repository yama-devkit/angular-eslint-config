import typescript from '@rollup/plugin-typescript';

export default {
    input: 'src/index.ts',
    output: {
        dir: 'dist',
        format: 'esm',
        sourcemap: true,
    },
    plugins: [typescript()],
    external: ['@eslint/js', 'angular-eslint', 'eslint-config-prettier', 'typescript-eslint'],
};
