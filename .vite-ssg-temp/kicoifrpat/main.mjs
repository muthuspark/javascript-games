import { ViteSSG } from "vite-ssg";
import { createHead } from "@unhead/vue";
import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<nav${ssrRenderAttrs(mergeProps({
    class: "navbar navbar-expand-lg",
    "aria-label": "Main navigation"
  }, _attrs))} data-v-4a5e67e8><div class="container" data-v-4a5e67e8>`);
  _push(ssrRenderComponent(_component_router_link, {
    class: "navbar-brand d-flex align-items-center",
    to: "/",
    "aria-label": "Brain Busters - Home"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="brand-text" data-v-4a5e67e8${_scopeId}>Brain Busters</span>`);
      } else {
        return [
          createVNode("span", { class: "brand-text" }, "Brain Busters")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation menu" data-v-4a5e67e8><span class="navbar-toggler-icon" data-v-4a5e67e8></span></button><div class="collapse navbar-collapse justify-content-end" id="navbarNav" data-v-4a5e67e8><ul class="navbar-nav align-items-center" data-v-4a5e67e8><li class="nav-item" data-v-4a5e67e8>`);
  _push(ssrRenderComponent(_component_router_link, {
    class: "nav-link",
    to: "/",
    "aria-label": "Browse all games"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="bi bi-controller me-1" aria-hidden="true" data-v-4a5e67e8${_scopeId}></i> Games `);
      } else {
        return [
          createVNode("i", {
            class: "bi bi-controller me-1",
            "aria-hidden": "true"
          }),
          createTextVNode(" Games ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-item" data-v-4a5e67e8>`);
  _push(ssrRenderComponent(_component_router_link, {
    class: "nav-link",
    to: "/about",
    "aria-label": "About the creator"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="bi bi-person me-1" aria-hidden="true" data-v-4a5e67e8${_scopeId}></i> About `);
      } else {
        return [
          createVNode("i", {
            class: "bi bi-person me-1",
            "aria-hidden": "true"
          }),
          createTextVNode(" About ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-item" data-v-4a5e67e8><a class="nav-link" href="https://github.com/muthuspark/javascript-games" target="_blank" rel="noopener noreferrer" aria-label="View source code on GitHub" data-v-4a5e67e8><i class="bi bi-github" aria-hidden="true" data-v-4a5e67e8></i><span class="d-lg-none ms-1" data-v-4a5e67e8>GitHub</span></a></li><li class="nav-item" data-v-4a5e67e8><a class="nav-link" href="https://twitter.com/krimuthu" target="_blank" rel="noopener noreferrer" aria-label="Follow on Twitter" data-v-4a5e67e8><i class="bi bi-twitter" aria-hidden="true" data-v-4a5e67e8></i><span class="d-lg-none ms-1" data-v-4a5e67e8>Twitter</span></a></li></ul></div></div></nav>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/NavBar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const NavBar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-4a5e67e8"]]);
const _sfc_main$1 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<footer${ssrRenderAttrs(mergeProps({
        class: "footer mt-auto py-4",
        role: "contentinfo"
      }, _attrs))} data-v-222f256c><div class="container" data-v-222f256c><div class="row align-items-center" data-v-222f256c><div class="col-md-6 text-center text-md-start" data-v-222f256c><p class="mb-2 mb-md-0" data-v-222f256c> © ${ssrInterpolate(unref(currentYear))} <a href="/about" data-v-222f256c>Muthukrishnan</a></p></div><div class="col-md-6 text-center text-md-end" data-v-222f256c><nav aria-label="Footer navigation" class="footer-nav" data-v-222f256c>`);
      _push(ssrRenderComponent(_component_router_link, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Games`);
          } else {
            return [
              createTextVNode("Games")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_router_link, { to: "/about" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About`);
          } else {
            return [
              createTextVNode("About")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="https://github.com/muthuspark/javascript-games" target="_blank" rel="noopener noreferrer" aria-label="View source code on GitHub" data-v-222f256c> Source </a></nav></div></div></div></footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-222f256c"]]);
const _sfc_main = {
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_view = resolveComponent("router-view");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex flex-column min-vh-100" }, _attrs))}><a href="#main-content" class="visually-hidden-focusable skip-link"> Skip to main content </a><header>`);
      _push(ssrRenderComponent(NavBar, null, null, _parent));
      _push(`</header><main id="main-content" class="flex-grow-1" role="main">`);
      _push(ssrRenderComponent(_component_router_view, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const games = [
  {
    slug: "sudoku",
    title: "Play Sudoku Online Free",
    shortTitle: "Sudoku",
    description: "Play classic Sudoku puzzles online for free. Fill the 9x9 grid so each row, column, and 3x3 box contains digits 1-9. Multiple difficulty levels from easy to hard.",
    thumbnail: "thumbnail.png",
    categories: ["Puzzles", "Logic Games", "Number Games"]
  },
  {
    slug: "maze",
    title: "Maze Game Online - Navigate Through Puzzles",
    shortTitle: "Maze Game",
    description: "Navigate through randomly generated mazes using keyboard controls. Choose from 10x10 to 90x90 grid sizes for varying difficulty levels.",
    thumbnail: "thumbnail.png",
    categories: ["Puzzles", "Navigation Games"]
  },
  {
    slug: "tic-tac-toe",
    title: "Tic Tac Toe Online - Play Against AI",
    shortTitle: "Tic Tac Toe",
    description: "Play Tic Tac Toe online against AI with adjustable difficulty. Choose 3x3, 4x4, or 5x5 grid sizes. Classic X and O game for all ages.",
    thumbnail: "thumbnail.png",
    categories: ["Puzzles", "Strategy Games", "Classic Games"]
  },
  {
    slug: "connect4",
    title: "Connect 4 Game Online - Free to Play",
    shortTitle: "Connect 4",
    description: "Play Connect 4 online against AI. Drop colored discs into a 7x6 grid and be first to connect four in a row. Multiple difficulty levels available.",
    thumbnail: "thumbnail.png",
    categories: ["Puzzles", "Strategy Games", "Classic Games"]
  },
  {
    slug: "minesweeper",
    title: "Minesweeper Online - Classic Puzzle Game",
    shortTitle: "Minesweeper",
    description: "Play classic Minesweeper online. Reveal squares while avoiding hidden mines. Numbers indicate adjacent mines. Three difficulty levels available.",
    thumbnail: "thumbnail.png",
    categories: ["Puzzles", "Logic Games", "Classic Games"]
  },
  {
    slug: "word-search",
    title: "Word Search Puzzle - Find Hidden Words",
    shortTitle: "Word Search",
    description: "Find hidden words in a grid of letters. Words can be horizontal, vertical, diagonal, or backwards. Multiple categories and grid sizes.",
    thumbnail: "thumbnail.png",
    categories: ["Puzzles", "Word Games", "Educational"]
  },
  {
    slug: "sliding-puzzle",
    title: "Sliding Puzzle Game - Number Tile Puzzle",
    shortTitle: "Sliding Puzzle",
    description: "Slide numbered tiles to arrange them in order. Choose from 3x3 to 7x8 grid sizes. Features AI solver to demonstrate solutions.",
    thumbnail: "thumbnail.png",
    categories: ["Puzzles", "Logic Games"]
  },
  {
    slug: "latin-square",
    title: "Latin Square Puzzle - Logic Number Game",
    shortTitle: "Latin Square",
    description: "Fill the grid so each number appears exactly once in each row and column. Similar to Sudoku but without box constraints.",
    thumbnail: "thumbnail.png",
    categories: ["Puzzles", "Logic Games", "Number Games"]
  },
  {
    slug: "magicsquare",
    title: "Magic Square Puzzle - Math Brain Game",
    shortTitle: "Magic Square",
    description: "Arrange numbers in a grid so rows, columns, and diagonals all sum to the same magic number. Great for math practice.",
    thumbnail: "thumbnail.png",
    categories: ["Puzzles", "Math Games", "Educational"]
  },
  {
    slug: "n-queens",
    title: "N-Queens Puzzle - Chess Logic Game",
    shortTitle: "N-Queens",
    description: "Place N queens on an NxN chessboard so no two queens threaten each other. Classic chess puzzle from 4x4 to 12x12.",
    thumbnail: "thumbnail.png",
    categories: ["Puzzles", "Chess", "Logic Games"]
  },
  {
    slug: "knights-tour",
    title: "Knight's Tour Puzzle - Chess Movement Game",
    shortTitle: "Knight's Tour",
    description: "Move a chess knight to visit every square exactly once. Classic mathematical puzzle with hints available.",
    thumbnail: "thumbnail.png",
    categories: ["Puzzles", "Chess", "Math Games"]
  },
  {
    slug: "typing-speed",
    title: "Typing Speed Test - WPM Calculator",
    shortTitle: "Typing Test",
    description: "Test your typing speed and accuracy. Measure words per minute (WPM) and characters per minute (CPM) with 60-second challenges.",
    thumbnail: "thumbnail.png",
    categories: ["Challenge", "Educational", "Skills"]
  },
  {
    slug: "memory-match",
    title: "Memory Match Game - Card Matching Puzzle",
    shortTitle: "Memory Match",
    description: "Flip cards to find matching pairs. Train your memory with this classic concentration game. Multiple grid sizes from easy to challenging.",
    thumbnail: "thumbnail.png",
    categories: ["Puzzles", "Memory Games", "Classic Games"]
  },
  {
    slug: "hangman",
    title: "Hangman Game - Word Guessing Puzzle",
    shortTitle: "Hangman",
    description: "Guess the hidden word one letter at a time. Classic word guessing game with multiple categories including animals, countries, foods, and more.",
    thumbnail: "thumbnail.png",
    categories: ["Word Games", "Classic Games", "Educational"]
  },
  {
    slug: "lights-out",
    title: "Lights Out Puzzle - Turn Off All Lights",
    shortTitle: "Lights Out",
    description: "Toggle lights to turn them all off. Clicking a light switches it and adjacent lights. A classic logic puzzle with multiple grid sizes.",
    thumbnail: "thumbnail.png",
    categories: ["Puzzles", "Logic Games"]
  },
  {
    slug: "simon-says",
    title: "Simon Says Game - Memory Sequence Game",
    shortTitle: "Simon Says",
    description: "Watch the color sequence and repeat it back. Each round adds one more color. How long can you keep up? Classic memory game with sound.",
    thumbnail: "thumbnail.png",
    categories: ["Memory Games", "Classic Games", "Challenge"]
  },
  {
    slug: "reaction-time",
    title: "Reaction Time Test - Test Your Reflexes",
    shortTitle: "Reaction Time",
    description: "Test how fast you can react! Wait for the screen to turn green, then click as quickly as possible. Track your average and best reaction times.",
    thumbnail: "thumbnail.png",
    categories: ["Challenge", "Reflex Games", "Skills"]
  },
  {
    slug: "whack-a-mole",
    title: "Whack-a-Mole Game - Test Your Speed",
    shortTitle: "Whack-a-Mole",
    description: "Whack the moles as they pop up from their holes! A classic arcade game that tests your reflexes. Score as many points as you can in 30 seconds.",
    thumbnail: "thumbnail.png",
    categories: ["Reflex Games", "Classic Games", "Challenge"]
  },
  {
    slug: "mastermind",
    title: "Mastermind Game - Code Breaking Puzzle",
    shortTitle: "Mastermind",
    description: "Crack the secret color code in 10 guesses or less. Use logic and deduction from feedback pegs to figure out the hidden pattern.",
    thumbnail: "thumbnail.png",
    categories: ["Puzzles", "Logic Games", "Classic Games"]
  },
  {
    slug: "bulls-and-cows",
    title: "Bulls and Cows - Number Guessing Game",
    shortTitle: "Bulls and Cows",
    description: "Guess the secret number using logic and deduction. Bulls mean correct digit in correct position, cows mean correct digit in wrong position.",
    thumbnail: "thumbnail.png",
    categories: ["Puzzles", "Logic Games", "Number Games"]
  },
  {
    slug: "nim",
    title: "Nim Game - Strategic Object Removal",
    shortTitle: "Nim",
    description: "Play Nim against AI. Take objects from piles strategically - whoever takes the last object loses. A classic mathematical strategy game.",
    thumbnail: "thumbnail.png",
    categories: ["Strategy Games", "Logic Games", "Classic Games"]
  },
  {
    slug: "dots-and-boxes",
    title: "Dots and Boxes Game - Connect the Dots",
    shortTitle: "Dots and Boxes",
    description: "Play Dots and Boxes against AI. Draw lines between dots to complete boxes and score points. Classic pencil-and-paper strategy game.",
    thumbnail: "thumbnail.png",
    categories: ["Strategy Games", "Classic Games", "Puzzles"]
  },
  {
    slug: "hex",
    title: "Hex Game - Connection Strategy Puzzle",
    shortTitle: "Hex",
    description: "Play Hex against AI. Connect your sides of the board before your opponent. A classic connection strategy game with simple rules but deep tactics.",
    thumbnail: "thumbnail.png",
    categories: ["Strategy Games", "Logic Games", "Classic Games"]
  },
  {
    slug: "set-game",
    title: "Set Game - Find Matching Card Sets",
    shortTitle: "Set Game",
    description: "Find sets of three cards where each feature is either all the same or all different. A challenging visual logic puzzle that trains pattern recognition.",
    thumbnail: "thumbnail.png",
    categories: ["Puzzles", "Logic Games", "Pattern Games"]
  },
  {
    slug: "tangram",
    title: "Tangram Puzzle - Classic Shape Puzzle Game",
    shortTitle: "Tangram",
    description: "Arrange seven geometric pieces to match silhouette puzzles. Drag, rotate, and flip pieces to create shapes. A timeless Chinese puzzle game.",
    thumbnail: "thumbnail.png",
    categories: ["Puzzles", "Pattern Games", "Classic Games"]
  }
];
const siteData = {
  siteUrl: "https://games.muthu.co",
  description: "Play free online puzzle games including Sudoku, Minesweeper, Tic Tac Toe, and more. Train your brain with our collection of logic and strategy games.",
  author: {
    name: "Muthukrishnan"
  }
};
const gamePages = {
  "sudoku": () => import("./assets/SudokuPage-BzfdV2Pr.js"),
  "maze": () => import("./assets/MazePage-Bv_glhWy.js"),
  "tic-tac-toe": () => import("./assets/TicTacToePage-D-3jPtxg.js"),
  "connect4": () => import("./assets/Connect4Page-4Vi9ARec.js"),
  "minesweeper": () => import("./assets/MinesweeperPage-BGv0s6gL.js"),
  "word-search": () => import("./assets/WordSearchPage-BqWy4nZm.js"),
  "sliding-puzzle": () => import("./assets/SlidingPuzzlePage-BV9k246n.js"),
  "latin-square": () => import("./assets/LatinSquarePage-BuhqtKRQ.js"),
  "magicsquare": () => import("./assets/MagicSquarePage-BJoy1llJ.js"),
  "n-queens": () => import("./assets/NQueensPage-DI_urb7B.js"),
  "knights-tour": () => import("./assets/KnightsTourPage-CaN8Yz8H.js"),
  "typing-speed": () => import("./assets/TypingSpeedPage-ulq4YHBr.js"),
  "memory-match": () => import("./assets/MemoryMatchPage-BWWz28cn.js"),
  "hangman": () => import("./assets/HangmanPage-CmQbX1Ec.js"),
  "lights-out": () => import("./assets/LightsOutPage-CK4PDXFG.js"),
  "simon-says": () => import("./assets/SimonSaysPage-CX92metA.js"),
  "reaction-time": () => import("./assets/ReactionTimePage-CHBslTt5.js"),
  "whack-a-mole": () => import("./assets/WhackAMolePage-B1jllFVL.js"),
  "mastermind": () => import("./assets/MastermindPage-BIIMJCqC.js"),
  "bulls-and-cows": () => import("./assets/BullsAndCowsPage-DoHoCwER.js"),
  "nim": () => import("./assets/NimPage-DfZjdFLm.js"),
  "dots-and-boxes": () => import("./assets/DotsAndBoxesPage-Bgw29Wtd.js"),
  "hex": () => import("./assets/HexPage-D5RN-Cfg.js"),
  "set-game": () => import("./assets/SetGamePage-C0G3_8kj.js"),
  "tangram": () => import("./assets/TangramPage-BT1Uxy91.js")
};
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("./assets/HomePage-CJ02ncna.js")
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    path: "/about",
    name: "about",
    component: () => import("./assets/AboutPage-BsoSwnsn.js")
  },
  {
    path: "/about.html",
    redirect: "/about"
  }
];
games.forEach((game) => {
  routes.push({
    path: `/posts/${game.slug}/`,
    name: `game-${game.slug}`,
    component: gamePages[game.slug]
  });
  routes.push({
    path: `/posts/${game.slug}`,
    redirect: `/posts/${game.slug}/`
  });
});
const createApp = ViteSSG(
  _sfc_main,
  {
    routes,
    base: "/"
  },
  ({ app, router, isClient }) => {
    const head = createHead();
    app.use(head);
    if (isClient) {
      router.afterEach((to) => {
        if (typeof gtag !== "undefined") {
          gtag("config", "G-BH3P7R68Z6", {
            page_path: to.fullPath
          });
        }
      });
    }
  }
);
export {
  _export_sfc as _,
  createApp,
  games as g,
  siteData as s
};
