import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { u as useGameLoader, a as useGameSeo, B as Breadcrumb, G as GameFaqs, R as RelatedGames } from "./RelatedGames-Bqp8dbEn.js";
import { _ as _export_sfc } from "../main.mjs";
import "@unhead/vue";
import "vite-ssg";
const _sfc_main = {
  __name: "NQueensPage",
  __ssrInlineRender: true,
  setup(__props) {
    const game = {
      slug: "n-queens",
      title: "N-Queens Puzzle - Chess Logic Game",
      shortTitle: "N-Queens",
      description: "Place N queens on an NxN chessboard so no two queens threaten each other. Classic chess puzzle from 4x4 to 12x12.",
      metaDescription: "Play the N-Queens puzzle online. Place queens on a chessboard without them threatening each other. Classic computer science puzzle game.",
      categories: ["Puzzles", "Chess", "Logic Games"],
      keywords: ["n queens", "eight queens", "chess puzzle", "queen placement", "logic puzzle"],
      initCode: "initializePuzzle();",
      faqs: [
        {
          question: "What is the N-Queens puzzle?",
          answer: "Place N queens on an NxN chessboard so no two queens can attack each other. Queens attack horizontally, vertically, and diagonally."
        },
        {
          question: "How many solutions does the 8 Queens puzzle have?",
          answer: "The 8 Queens puzzle has 92 distinct solutions, or 12 fundamental solutions when accounting for symmetry."
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
      }, _attrs))} data-v-17aa0175>`);
      _push(ssrRenderComponent(Breadcrumb, { items: breadcrumbItems }, null, _parent));
      _push(`<header class="mb-4" data-v-17aa0175><h1 class="mb-2" itemprop="name" data-v-17aa0175>${ssrInterpolate(game.title)}</h1><p class="text-muted lead" itemprop="description" data-v-17aa0175>${ssrInterpolate(game.description)}</p><div class="mb-3" data-v-17aa0175><!--[-->`);
      ssrRenderList(game.categories, (category) => {
        _push(`<span class="badge bg-success me-2" itemprop="genre" data-v-17aa0175>${ssrInterpolate(category)}</span>`);
      });
      _push(`<!--]--></div></header><section class="game-section" aria-label="Game Area" data-v-17aa0175><div class="container" data-v-17aa0175><div class="level-select" data-v-17aa0175><button onclick="setLevel(4)" data-v-17aa0175>4x4</button><button onclick="setLevel(5)" data-v-17aa0175>5x5</button><button onclick="setLevel(6)" data-v-17aa0175>6x6</button><button onclick="setLevel(8)" data-v-17aa0175>8x8</button><button onclick="setLevel(9)" data-v-17aa0175>9x9</button><button onclick="setLevel(10)" data-v-17aa0175>10x10</button><button onclick="setLevel(11)" data-v-17aa0175>11x11</button><button onclick="setLevel(12)" data-v-17aa0175>12x12</button></div><div class="queen-count" id="queenCount" data-v-17aa0175></div><div class="board" id="board" data-v-17aa0175></div><div class="controls" data-v-17aa0175><button onclick="getHint()" data-v-17aa0175>Get Hint</button><button onclick="checkSolution()" data-v-17aa0175>Check Solution</button><button onclick="resetPuzzle()" data-v-17aa0175>Reset</button></div><div class="status" id="status" data-v-17aa0175></div></div></section>`);
      _push(ssrRenderComponent(GameFaqs, {
        faqs: game.faqs
      }, null, _parent));
      _push(ssrRenderComponent(RelatedGames, {
        currentSlug: game.slug,
        categories: game.categories
      }, null, _parent));
      _push(`<meta itemprop="url"${ssrRenderAttr("content", `https://games.muthu.co/posts/${game.slug}/`)} data-v-17aa0175><meta itemprop="image"${ssrRenderAttr("content", `https://games.muthu.co/posts/${game.slug}/thumbnail.png`)} data-v-17aa0175><meta itemprop="applicationCategory" content="Game" data-v-17aa0175><meta itemprop="operatingSystem" content="Web Browser" data-v-17aa0175><span itemprop="offers" itemscope itemtype="https://schema.org/Offer" style="${ssrRenderStyle({ "display": "none" })}" data-v-17aa0175><meta itemprop="price" content="0" data-v-17aa0175><meta itemprop="priceCurrency" content="USD" data-v-17aa0175></span></article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/games/NQueensPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const NQueensPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-17aa0175"]]);
export {
  NQueensPage as default
};
