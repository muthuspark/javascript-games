import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { u as useGameLoader, a as useGameSeo, B as Breadcrumb, G as GameFaqs, R as RelatedGames } from "./RelatedGames-Bqp8dbEn.js";
import { _ as _export_sfc } from "../main.mjs";
import "@unhead/vue";
import "vite-ssg";
const _sfc_main = {
  __name: "LatinSquarePage",
  __ssrInlineRender: true,
  setup(__props) {
    const game = {
      slug: "latin-square",
      title: "Latin Square Puzzle - Logic Number Game",
      shortTitle: "Latin Square",
      description: "Fill the grid so each number appears exactly once in each row and column. Similar to Sudoku but without box constraints.",
      metaDescription: "Play Latin Square puzzles online. Fill the grid so each number appears once per row and column. Great logic training game for all skill levels.",
      categories: ["Puzzles", "Logic Games", "Number Games"],
      keywords: ["latin square", "logic puzzle", "number grid", "latin square puzzle", "math puzzle"],
      initCode: "initializePuzzle(); renderGrid();",
      faqs: [
        {
          question: "What is a Latin Square?",
          answer: "A Latin Square is a grid where each symbol (usually numbers) appears exactly once in each row and once in each column."
        },
        {
          question: "How is Latin Square different from Sudoku?",
          answer: "Latin Square only requires unique numbers in rows and columns. Sudoku adds the constraint of unique numbers in 3x3 boxes too."
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
      }, _attrs))} data-v-704b970c>`);
      _push(ssrRenderComponent(Breadcrumb, { items: breadcrumbItems }, null, _parent));
      _push(`<header class="mb-4" data-v-704b970c><h1 class="mb-2" itemprop="name" data-v-704b970c>${ssrInterpolate(game.title)}</h1><p class="text-muted lead" itemprop="description" data-v-704b970c>${ssrInterpolate(game.description)}</p><div class="mb-3" data-v-704b970c><!--[-->`);
      ssrRenderList(game.categories, (category) => {
        _push(`<span class="badge bg-success me-2" itemprop="genre" data-v-704b970c>${ssrInterpolate(category)}</span>`);
      });
      _push(`<!--]--></div></header><section class="game-section" aria-label="Game Area" data-v-704b970c><div class="container" data-v-704b970c><div class="level-select" data-v-704b970c><button onclick="setLevel(3)" data-v-704b970c>3x3</button><button onclick="setLevel(4)" data-v-704b970c>4x4</button><button onclick="setLevel(5)" data-v-704b970c>5x5</button></div><div class="number-select" id="numberSelect" data-v-704b970c></div><div class="grid" id="grid" data-v-704b970c></div><div class="controls" data-v-704b970c><button onclick="getHint()" data-v-704b970c>Get Hint</button><button onclick="checkSolution()" data-v-704b970c>Check Solution</button><button onclick="resetPuzzle()" data-v-704b970c>Reset</button></div><div class="status" id="status" data-v-704b970c></div></div></section>`);
      _push(ssrRenderComponent(GameFaqs, {
        faqs: game.faqs
      }, null, _parent));
      _push(ssrRenderComponent(RelatedGames, {
        currentSlug: game.slug,
        categories: game.categories
      }, null, _parent));
      _push(`<meta itemprop="url"${ssrRenderAttr("content", `https://games.muthu.co/posts/${game.slug}/`)} data-v-704b970c><meta itemprop="image"${ssrRenderAttr("content", `https://games.muthu.co/posts/${game.slug}/thumbnail.png`)} data-v-704b970c><meta itemprop="applicationCategory" content="Game" data-v-704b970c><meta itemprop="operatingSystem" content="Web Browser" data-v-704b970c><span itemprop="offers" itemscope itemtype="https://schema.org/Offer" style="${ssrRenderStyle({ "display": "none" })}" data-v-704b970c><meta itemprop="price" content="0" data-v-704b970c><meta itemprop="priceCurrency" content="USD" data-v-704b970c></span></article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/games/LatinSquarePage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LatinSquarePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-704b970c"]]);
export {
  LatinSquarePage as default
};
