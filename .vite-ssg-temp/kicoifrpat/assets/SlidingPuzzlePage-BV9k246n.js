import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { u as useGameLoader, a as useGameSeo, B as Breadcrumb, G as GameFaqs, R as RelatedGames } from "./RelatedGames-Bqp8dbEn.js";
import { _ as _export_sfc } from "../main.mjs";
import "@unhead/vue";
import "vite-ssg";
const _sfc_main = {
  __name: "SlidingPuzzlePage",
  __ssrInlineRender: true,
  setup(__props) {
    const game = {
      slug: "sliding-puzzle",
      title: "Sliding Puzzle Game - Number Tile Puzzle",
      shortTitle: "Sliding Puzzle",
      description: "Slide numbered tiles to arrange them in order. Choose from 3x3 to 7x8 grid sizes. Features AI solver to demonstrate solutions.",
      metaDescription: "Play sliding tile puzzles online free. Arrange numbered tiles in order by sliding them. 10 difficulty levels with AI solver. Classic 15 puzzle.",
      categories: ["Puzzles", "Logic Games"],
      keywords: ["sliding puzzle", "15 puzzle", "tile puzzle", "number puzzle", "sliding tile game"],
      initCode: "newGame();",
      faqs: [
        {
          question: "How do you solve a sliding puzzle?",
          answer: "Slide tiles into the empty space to rearrange them in numerical order. Start by solving the top row, then work your way down."
        },
        {
          question: "What is the 15 puzzle?",
          answer: "The 15 puzzle is a classic sliding puzzle with 15 numbered tiles in a 4x4 grid. You slide tiles to arrange them from 1 to 15."
        }
      ]
    };
    const breadcrumbItems = [
      { name: "Home", path: "/" },
      { name: "Games", path: "/" },
      { name: game.shortTitle || game.title, path: `/posts/${game.slug}/` }
    ];
    useGameLoader(game.slug, game.initCode);
    useGameSeo(game);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({
        class: "container py-4",
        itemscope: "",
        itemtype: "https://schema.org/VideoGame"
      }, _attrs))} data-v-559c3960>`);
      _push(ssrRenderComponent(Breadcrumb, { items: breadcrumbItems }, null, _parent));
      _push(`<header class="mb-4" data-v-559c3960><h1 class="mb-2" itemprop="name" data-v-559c3960>${ssrInterpolate(game.title)}</h1><p class="text-muted lead" itemprop="description" data-v-559c3960>${ssrInterpolate(game.description)}</p><div class="mb-3" data-v-559c3960><!--[-->`);
      ssrRenderList(game.categories, (category) => {
        _push(`<span class="badge bg-success me-2" itemprop="genre" data-v-559c3960>${ssrInterpolate(category)}</span>`);
      });
      _push(`<!--]--></div></header><section class="game-section" aria-label="Game Area" data-v-559c3960><div class="game-container" data-v-559c3960><div class="controls" data-v-559c3960><select id="levelSelect" class="level-select" onchange="changeLevel()" data-v-559c3960><option value="1" data-v-559c3960>Level 1 (3x3)</option><option value="2" data-v-559c3960>Level 2 (3x4)</option><option value="3" data-v-559c3960>Level 3 (4x4)</option><option value="4" data-v-559c3960>Level 4 (4x5)</option><option value="5" data-v-559c3960>Level 5 (5x5)</option><option value="6" data-v-559c3960>Level 6 (5x6)</option><option value="7" data-v-559c3960>Level 7 (6x6)</option><option value="8" data-v-559c3960>Level 8 (6x7)</option><option value="9" data-v-559c3960>Level 9 (7x7)</option><option value="10" data-v-559c3960>Level 10 (7x8)</option></select><button onclick="newGame()" data-v-559c3960>New Game</button><button onclick="shuffleBoard()" data-v-559c3960>Shuffle</button><button onclick="startSolving()" class="solve" id="solveButton" data-v-559c3960>Ai Solve Puzzle</button></div><div class="stats" data-v-559c3960><div data-v-559c3960>Moves: <span id="moveCount" data-v-559c3960>0</span></div><div data-v-559c3960>Best Score: <span id="bestScore" data-v-559c3960>-</span></div></div><div id="solvingStatus" class="solving-status" style="${ssrRenderStyle({ "display": "none" })}" data-v-559c3960>Solving puzzle...</div><div class="board" data-v-559c3960></div></div></section>`);
      _push(ssrRenderComponent(GameFaqs, {
        faqs: game.faqs
      }, null, _parent));
      _push(ssrRenderComponent(RelatedGames, {
        currentSlug: game.slug,
        categories: game.categories
      }, null, _parent));
      _push(`<meta itemprop="url"${ssrRenderAttr("content", `https://games.muthu.co/posts/${game.slug}/`)} data-v-559c3960><meta itemprop="image"${ssrRenderAttr("content", `https://games.muthu.co/posts/${game.slug}/thumbnail.png`)} data-v-559c3960><meta itemprop="applicationCategory" content="Game" data-v-559c3960><meta itemprop="operatingSystem" content="Web Browser" data-v-559c3960><span itemprop="offers" itemscope itemtype="https://schema.org/Offer" style="${ssrRenderStyle({ "display": "none" })}" data-v-559c3960><meta itemprop="price" content="0" data-v-559c3960><meta itemprop="priceCurrency" content="USD" data-v-559c3960></span></article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/games/SlidingPuzzlePage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SlidingPuzzlePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-559c3960"]]);
export {
  SlidingPuzzlePage as default
};
