<script>
  let menuOpen = false;

  function openMenu() {
    menuOpen = true;
  }

  function closeMenu() {
    menuOpen = false;
  }
</script>

<header class="bg-white">
  <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
    <div class="flex flex-1">
      <div class="hidden lg:flex lg:gap-x-12">
        <a href="/state-local" class="text-sm font-semibold leading-6 text-gray-900">Local State</a>
        <a href="/state-global" class="text-sm font-semibold leading-6 text-gray-900"
          >Global State</a
        >
        <a href="/data-fetching" class="text-sm font-semibold leading-6 text-gray-900"
          >Data Fetching</a
        >
        <a href="/templates" class="text-sm font-semibold leading-6 text-gray-900">Templates</a>
        <a href="/libraries" class="text-sm font-semibold leading-6 text-gray-900">Libraries</a>
        <a href="/forms" class="text-sm font-semibold leading-6 text-gray-900">Forms</a>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          on:click={openMenu}
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </div>
  </nav>
  {#if menuOpen}
    <div class="lg:hidden" role="dialog" aria-modal="true">
      <!-- Background backdrop, show/hide based on slide-over state. -->
      <div class="fixed inset-0 z-10" />
      <div class="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-white px-6 py-6">
        <div class="flex items-center justify-between">
          <div class="flex flex-1">
            <button
              type="button"
              on:click={closeMenu}
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span class="sr-only">Close menu</span>
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div class="mt-6 space-y-2">
          <a
            href="/state-local"
            on:click={closeMenu}
            class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >Local State</a
          >
          <a
            href="/state-global"
            on:click={closeMenu}
            class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >Global State</a
          >
          <a
            href="/data-fetching"
            on:click={closeMenu}
            class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >Data Fetching</a
          >
          <a
            href="/templates"
            on:click={closeMenu}
            class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >Templates</a
          >
          <a
            href="/libraries"
            on:click={closeMenu}
            class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >Libraries</a
          >
          <a
            href="/forms"
            on:click={closeMenu}
            class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >Forms</a
          >
        </div>
      </div>
    </div>
  {/if}
</header>
