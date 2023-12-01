// https://stopsopa.github.io/viewer.html?file=%2Fpages%2Fbash%2Fxx%2Fxx-template.cjs
// edit: https://github.com/stopsopa/stopsopa.github.io/blob/master/pages/bash/xx/xx-template.cjs

// https://stopsopa.github.io/viewer.html?file=xx.cjs
// edit: https://github.com/stopsopa/stopsopa.github.io/blob/master/xx.cjs
// 🚀 -
// ✅ -
// ⚙️  -
// 🗑️  -
// 🛑 -

module.exports = (setup) => {
  return {
    help: {
      command: `
set -e  
# git config core.excludesFile .git/.gitignore_local
# read -p "       Press enter to continue\\n\\n"
source .env
# source .env.sh
export NODE_OPTIONS=""

cat <<EEE

  🐙 GitHub: $(git ls-remote --get-url origin | awk '{\$1=\$1};1' | tr -d '\\n' | sed -E 's/git@github\\.com:([^/]+)\\/(.+)\\.git/https:\\/\\/github.com\\/\\1\\/\\2/g')

  server:
    http://0.0.0.0:\${PORT}

-- DEV NOTES --

EEE

      `,
      description: "Status of all things",
      confirm: false,
    },    [`cerver`]: {
      command: `
source .env
cat <<EEE

    http://0.0.0.0:\${PORT}
EEE
read -p "\n      Press enter to continue\n"
python -m http.server \${PORT}
`,
      confirm: false,
    },

    ...setup,
  };
};
