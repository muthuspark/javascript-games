import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { u as useGameLoader, a as useGameSeo, B as Breadcrumb, G as GameFaqs, R as RelatedGames } from "./RelatedGames-Bqp8dbEn.js";
import { _ as _export_sfc } from "../main.mjs";
import "@unhead/vue";
import "vite-ssg";
const _sfc_main = {
  __name: "HangmanPage",
  __ssrInlineRender: true,
  setup(__props) {
    const game = {
      slug: "hangman",
      title: "Hangman Game - Word Guessing Puzzle",
      shortTitle: "Hangman",
      description: "Guess the hidden word one letter at a time. Classic word guessing game with multiple categories including animals, countries, foods, and more.",
      metaDescription: "Play Hangman online free. Guess the hidden word letter by letter before the hangman is complete. Multiple word categories for endless fun.",
      categories: ["Word Games", "Classic Games", "Educational"],
      keywords: ["hangman", "word game", "guessing game", "word puzzle", "vocabulary game", "spelling game"],
      initCode: "newGame();",
      faqs: [
        {
          question: "How do you play Hangman?",
          answer: "Try to guess the hidden word by selecting letters. Each correct letter reveals its position in the word. Each wrong guess adds a body part to the hangman. Guess the word before the hangman is complete to win!"
        },
        {
          question: "How many wrong guesses do I get?",
          answer: "You get 6 wrong guesses before the game is over. The hangman figure builds up with each wrong guess: head, body, left arm, right arm, left leg, and right leg."
        },
        {
          question: "What word categories are available?",
          answer: "Words are randomly selected from five categories: Animals, Countries, Foods, Sports, and Science. The category is shown as a hint to help you guess."
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
      }, _attrs))} data-v-9bd3a23c>`);
      _push(ssrRenderComponent(Breadcrumb, { items: breadcrumbItems }, null, _parent));
      _push(`<header class="mb-4" data-v-9bd3a23c><h1 class="mb-2" itemprop="name" data-v-9bd3a23c>${ssrInterpolate(game.title)}</h1><p class="text-muted lead" itemprop="description" data-v-9bd3a23c>${ssrInterpolate(game.description)}</p><div class="mb-3" data-v-9bd3a23c><!--[-->`);
      ssrRenderList(game.categories, (category) => {
        _push(`<span class="badge bg-success me-2" itemprop="genre" data-v-9bd3a23c>${ssrInterpolate(category)}</span>`);
      });
      _push(`<!--]--></div></header><section class="game-section" aria-label="Game Area" data-v-9bd3a23c><div class="game-container" data-v-9bd3a23c><svg class="hangman-svg" viewBox="0 0 200 250" data-v-9bd3a23c><line x1="20" y1="230" x2="100" y2="230" data-v-9bd3a23c></line><line x1="60" y1="230" x2="60" y2="20" data-v-9bd3a23c></line><line x1="60" y1="20" x2="140" y2="20" data-v-9bd3a23c></line><line x1="140" y1="20" x2="140" y2="50" data-v-9bd3a23c></line><circle id="head" cx="140" cy="70" r="20" data-v-9bd3a23c></circle><line id="body" x1="140" y1="90" x2="140" y2="150" data-v-9bd3a23c></line><line id="leftArm" x1="140" y1="110" x2="110" y2="140" data-v-9bd3a23c></line><line id="rightArm" x1="140" y1="110" x2="170" y2="140" data-v-9bd3a23c></line><line id="leftLeg" x1="140" y1="150" x2="110" y2="190" data-v-9bd3a23c></line><line id="rightLeg" x1="140" y1="150" x2="170" y2="190" data-v-9bd3a23c></line></svg><div class="hint" id="hint" data-v-9bd3a23c>Category: </div><div id="wordDisplay" class="word-display" data-v-9bd3a23c></div><div id="message" class="message" data-v-9bd3a23c></div><div id="keyboard" data-v-9bd3a23c></div><div class="stats" data-v-9bd3a23c><div data-v-9bd3a23c>Wrong: <span id="wrongCount" data-v-9bd3a23c>0</span>/6</div><div data-v-9bd3a23c>Wins: <span id="wins" data-v-9bd3a23c>0</span></div><div data-v-9bd3a23c>Losses: <span id="losses" data-v-9bd3a23c>0</span></div></div><div class="controls" data-v-9bd3a23c><button onclick="newGame()" data-v-9bd3a23c>New Game</button></div><div class="info" data-v-9bd3a23c>Tip: You can also use your keyboard to guess letters!</div></div></section>`);
      _push(ssrRenderComponent(GameFaqs, {
        faqs: game.faqs
      }, null, _parent));
      _push(ssrRenderComponent(RelatedGames, {
        currentSlug: game.slug,
        categories: game.categories
      }, null, _parent));
      _push(`<meta itemprop="url"${ssrRenderAttr("content", `https://games.muthu.co/posts/${game.slug}/`)} data-v-9bd3a23c><meta itemprop="image"${ssrRenderAttr("content", `https://games.muthu.co/posts/${game.slug}/thumbnail.png`)} data-v-9bd3a23c><meta itemprop="applicationCategory" content="Game" data-v-9bd3a23c><meta itemprop="operatingSystem" content="Web Browser" data-v-9bd3a23c><span itemprop="offers" itemscope itemtype="https://schema.org/Offer" style="${ssrRenderStyle({ "display": "none" })}" data-v-9bd3a23c><meta itemprop="price" content="0" data-v-9bd3a23c><meta itemprop="priceCurrency" content="USD" data-v-9bd3a23c></span></article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/games/HangmanPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HangmanPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9bd3a23c"]]);
export {
  HangmanPage as default
};
