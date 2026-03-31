import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  server: {
    host: true,
  },
  build: {
    rolldownOptions: {
      input: {
        index: new URL('./index.html', import.meta.url).pathname,
        segmented: new URL('./src/01-segmented-control.html', import.meta.url).pathname,
        tabs: new URL('./src/02-underline-tabs.html', import.meta.url).pathname,
        popover: new URL('./src/03-anchored-popover.html', import.meta.url).pathname,
        dialog: new URL('./src/04-launch-dialog.html', import.meta.url).pathname,
        toast: new URL('./src/05-toast-stack.html', import.meta.url).pathname,
        fab: new URL('./src/06-fab-menu.html', import.meta.url).pathname,
        letters: new URL('./src/07-letter-reveal.html', import.meta.url).pathname,
        accordion: new URL('./src/08-accordion.html', import.meta.url).pathname,
        switchBadge: new URL('./src/09-switch-badge.html', import.meta.url).pathname,
        thumbnailDetail: new URL('./src/11-thumbnail-detail.html', import.meta.url).pathname,
        menuPopover: new URL('./src/12-menu-popover.html', import.meta.url).pathname,
        bottomSheet: new URL('./src/13-bottom-sheet.html', import.meta.url).pathname,
        profileMenu: new URL('./src/14-profile-menu.html', import.meta.url).pathname,
        currentPointer: new URL('./src/15-current-pointer.html', import.meta.url).pathname,
        searchExpand: new URL('./src/16-search-expand.html', import.meta.url).pathname,
        sideDrawer: new URL('./src/17-side-drawer.html', import.meta.url).pathname,
        commandPalette: new URL('./src/18-command-palette.html', import.meta.url).pathname,
        chipDismiss: new URL('./src/19-chip-dismiss.html', import.meta.url).pathname,
        submitMorph: new URL('./src/20-submit-morph.html', import.meta.url).pathname,
      },
    },
  },
})
