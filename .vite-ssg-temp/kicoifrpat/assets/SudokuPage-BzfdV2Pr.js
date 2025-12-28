import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { u as useGameLoader, a as useGameSeo, B as Breadcrumb, G as GameFaqs, R as RelatedGames } from "./RelatedGames-Bqp8dbEn.js";
import { _ as _export_sfc } from "../main.mjs";
import "@unhead/vue";
import "vite-ssg";
const _sfc_main = {
  __name: "SudokuPage",
  __ssrInlineRender: true,
  setup(__props) {
    const game = {
      slug: "sudoku",
      title: "Play Sudoku Online Free",
      shortTitle: "Sudoku",
      description: "Play classic Sudoku puzzles online for free. Fill the 9x9 grid so each row, column, and 3x3 box contains digits 1-9. Multiple difficulty levels from easy to hard.",
      metaDescription: "Play free online Sudoku puzzles with easy, medium, and hard difficulty levels. Train your brain with this classic number placement game. No download required.",
      categories: ["Puzzles", "Logic Games", "Number Games"],
      keywords: ["sudoku online", "free sudoku", "sudoku puzzle", "number puzzle", "brain games"],
      initCode: "newGame();",
      faqs: [
        {
          question: "How do you play Sudoku?",
          answer: "Fill the 9x9 grid so that each row, column, and 3x3 box contains the numbers 1-9 exactly once. Start with the given numbers and use logic to fill in the rest."
        },
        {
          question: "What are the rules of Sudoku?",
          answer: "Each row must contain numbers 1-9 without repetition. Each column must contain numbers 1-9 without repetition. Each 3x3 box must contain numbers 1-9 without repetition."
        },
        {
          question: "Is Sudoku good for your brain?",
          answer: "Yes! Sudoku improves logical thinking, memory, and concentration. Regular play can help keep your mind sharp and may reduce cognitive decline."
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
      }, _attrs))} data-v-fb0673e3>`);
      _push(ssrRenderComponent(Breadcrumb, { items: breadcrumbItems }, null, _parent));
      _push(`<header class="mb-4" data-v-fb0673e3><h1 class="mb-2" itemprop="name" data-v-fb0673e3>${ssrInterpolate(game.title)}</h1><p class="text-muted lead" itemprop="description" data-v-fb0673e3>${ssrInterpolate(game.description)}</p><div class="mb-3" data-v-fb0673e3><!--[-->`);
      ssrRenderList(game.categories, (category) => {
        _push(`<span class="badge bg-success me-2" itemprop="genre" data-v-fb0673e3>${ssrInterpolate(category)}</span>`);
      });
      _push(`<!--]--></div></header><section class="game-section" aria-label="Game Area" data-v-fb0673e3><div class="sudoku" data-v-fb0673e3><div class="difficulty-controls" data-v-fb0673e3><button class="difficulty easy selected" onclick="setDifficulty(&#39;easy&#39;)" data-v-fb0673e3>Easy</button><button class="difficulty medium" onclick="setDifficulty(&#39;medium&#39;)" data-v-fb0673e3>Medium</button><button class="difficulty hard" onclick="setDifficulty(&#39;hard&#39;)" data-v-fb0673e3>Hard</button></div><div class="timer" id="timer" data-v-fb0673e3>00:00</div><div class="controls" data-v-fb0673e3><button onclick="newGame()" data-v-fb0673e3>New Game</button><button onclick="hint()" data-v-fb0673e3>Get Hint</button></div><div class="grid" id="grid" data-v-fb0673e3></div><div class="message" id="message" data-v-fb0673e3></div></div></section>`);
      _push(ssrRenderComponent(GameFaqs, {
        faqs: game.faqs
      }, null, _parent));
      _push(ssrRenderComponent(RelatedGames, {
        currentSlug: game.slug,
        categories: game.categories
      }, null, _parent));
      _push(`<meta itemprop="url"${ssrRenderAttr("content", `https://games.muthu.co/posts/${game.slug}/`)} data-v-fb0673e3><meta itemprop="image"${ssrRenderAttr("content", `https://games.muthu.co/posts/${game.slug}/thumbnail.png`)} data-v-fb0673e3><meta itemprop="applicationCategory" content="Game" data-v-fb0673e3><meta itemprop="operatingSystem" content="Web Browser" data-v-fb0673e3><span itemprop="offers" itemscope itemtype="https://schema.org/Offer" style="${ssrRenderStyle({ "display": "none" })}" data-v-fb0673e3><meta itemprop="price" content="0" data-v-fb0673e3><meta itemprop="priceCurrency" content="USD" data-v-fb0673e3></span></article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/games/SudokuPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SudokuPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fb0673e3"]]);
export {
  SudokuPage as default
};
