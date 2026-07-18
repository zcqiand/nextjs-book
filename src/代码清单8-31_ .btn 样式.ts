@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply font-sans text-gray-900 bg-gray-50;
  }
}

@layer components {
  .btn {
    @apply px-4 py-2 rounded font-medium transition-colors;
  }
  .btn-primary {
    @apply btn bg-blue-500 text-white hover:bg-blue-600;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}