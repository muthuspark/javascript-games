import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { u as useGameLoader, a as useGameSeo, B as Breadcrumb, G as GameFaqs, R as RelatedGames } from "./RelatedGames-Bqp8dbEn.js";
import { _ as _export_sfc } from "../main.mjs";
import "@unhead/vue";
import "vite-ssg";
const _sfc_main = {
  __name: "TicTacToePage",
  __ssrInlineRender: true,
  setup(__props) {
    const game = {
      slug: "tic-tac-toe",
      title: "Tic Tac Toe Online - Play Against AI",
      shortTitle: "Tic Tac Toe",
      description: "Play Tic Tac Toe online against AI with adjustable difficulty. Choose 3x3, 4x4, or 5x5 grid sizes. Classic X and O game for all ages.",
      metaDescription: "Play free Tic Tac Toe online against computer AI. Multiple grid sizes (3x3, 4x4, 5x5) and difficulty levels. Classic noughts and crosses game.",
      categories: ["Puzzles", "Strategy Games", "Classic Games"],
      keywords: ["tic tac toe", "noughts and crosses", "x and o game", "tic tac toe online", "play tic tac toe"],
      initCode: "startNewGame();",
      faqs: [
        {
          question: "How do you win at Tic Tac Toe?",
          answer: "Get three (or more on larger grids) of your symbols in a row horizontally, vertically, or diagonally before your opponent does."
        },
        {
          question: "Can you play Tic Tac Toe against computer?",
          answer: "Yes! This version features AI opponents with easy, medium, and hard difficulty levels."
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
      }, _attrs))} data-v-76755370>`);
      _push(ssrRenderComponent(Breadcrumb, { items: breadcrumbItems }, null, _parent));
      _push(`<header class="mb-4" data-v-76755370><h1 class="mb-2" itemprop="name" data-v-76755370>${ssrInterpolate(game.title)}</h1><p class="text-muted lead" itemprop="description" data-v-76755370>${ssrInterpolate(game.description)}</p><div class="mb-3" data-v-76755370><!--[-->`);
      ssrRenderList(game.categories, (category) => {
        _push(`<span class="badge bg-success me-2" itemprop="genre" data-v-76755370>${ssrInterpolate(category)}</span>`);
      });
      _push(`<!--]--></div></header><section class="game-section" aria-label="Game Area" data-v-76755370><div class="controls" data-v-76755370><select id="difficulty" data-v-76755370><option value="easy" data-v-76755370>Easy</option><option value="medium" data-v-76755370>Medium</option><option value="hard" data-v-76755370>Hard</option></select><select id="gridSize" data-v-76755370><option value="3" data-v-76755370>3x3</option><option value="4" data-v-76755370>4x4</option><option value="5" data-v-76755370>5x5</option></select><button onclick="startNewGame()" data-v-76755370>New Game</button></div><div id="gameBoard" class="game-board" data-v-76755370></div><div id="status" class="status" data-v-76755370></div></section>`);
      _push(ssrRenderComponent(GameFaqs, {
        faqs: game.faqs
      }, null, _parent));
      _push(ssrRenderComponent(RelatedGames, {
        currentSlug: game.slug,
        categories: game.categories
      }, null, _parent));
      _push(`<meta itemprop="url"${ssrRenderAttr("content", `https://games.muthu.co/posts/${game.slug}/`)} data-v-76755370><meta itemprop="image"${ssrRenderAttr("content", `https://games.muthu.co/posts/${game.slug}/thumbnail.png`)} data-v-76755370><meta itemprop="applicationCategory" content="Game" data-v-76755370><meta itemprop="operatingSystem" content="Web Browser" data-v-76755370><span itemprop="offers" itemscope itemtype="https://schema.org/Offer" style="${ssrRenderStyle({ "display": "none" })}" data-v-76755370><meta itemprop="price" content="0" data-v-76755370><meta itemprop="priceCurrency" content="USD" data-v-76755370></span></article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/games/TicTacToePage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TicTacToePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-76755370"]]);
export {
  TicTacToePage as default
};
