# Tauri + Nuxt ^3.10 + TypeScript

This template should help get you started developing with Nuxt ^3.10 and TypeScript.

Works for Mobile and Desktop

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

## HMR

In development, Nuxt configure the Vite to use same development server for HMR (See this [PR](https://github.com/nuxt/cli/pull/184)). But for mobile/remote development the HMR maybe not work. So we need set a environment variable (See this [PR](https://github.com/nuxt/cli/pull/189))

So, you need create a `.env` file in project root.

```
NUXI_DISABLE_VITE_HMR=true
```

After this, you can run `pnpm tauri dev` or `pnpm tauri android dev`


If change the application package name `nuxtauri` to another in the files, please, delete the `src-tauri/gen` dir and run `pnpm tauri android init` to configure the new application name if you will work with mobile.
