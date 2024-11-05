'use client';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { useEffect, useRef, useCallback, useState } from 'react';
var useInfiniteScroll = function (_a) {
    var fetchItems = _a.fetchItems, _b = _a.threshold, threshold = _b === void 0 ? 0.8 : _b, _c = _a.root, root = _c === void 0 ? null : _c, _d = _a.rootMargin, rootMargin = _d === void 0 ? '0px' : _d, _e = _a.initialPage, initialPage = _e === void 0 ? 0 : _e, _f = _a.cache, cache = _f === void 0 ? false : _f;
    var observer = useRef(null);
    var lastElementRef = useRef(null);
    var _g = useState(function () {
        if (cache && typeof window !== 'undefined') {
            var savedItems = localStorage.getItem('infiniteScrollItems');
            return savedItems ? JSON.parse(savedItems) : [];
        }
        return [];
    }), items = _g[0], setItems = _g[1];
    var _h = useState(function () {
        if (cache) {
            var savedPage = localStorage.getItem('infiniteScrollPage');
            return savedPage ? JSON.parse(savedPage) : initialPage;
        }
        return initialPage;
    }), page = _h[0], setPage = _h[1];
    var _j = useState(true), hasMore = _j[0], setHasMore = _j[1];
    var _k = useState(false), isLoading = _k[0], setIsLoading = _k[1];
    var _l = useState(0), totalPages = _l[0], setTotalPages = _l[1];
    var _m = useState(false), error = _m[0], setError = _m[1]; // New state to track errors
    var cacheRef = useRef({});
    var loadMoreItems = useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        var newResponse_1, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (isLoading || !hasMore || error)
                        return [2 /*return*/];
                    setIsLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    if (cacheRef.current[page] && cacheRef.current[page] !== undefined) {
                        setItems(function (prev) { return __spreadArray(__spreadArray([], prev, true), cacheRef.current[page], true); });
                        setPage(function (prevPage) { return prevPage + 1; });
                        setIsLoading(false);
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, fetchItems(page)];
                case 2:
                    newResponse_1 = _a.sent();
                    if (newResponse_1.results.length !== 0) {
                        setItems(function (prev) { return __spreadArray(__spreadArray([], prev, true), newResponse_1.results, true); });
                        setPage(function (prevPage) { return prevPage + 1; });
                        setTotalPages(newResponse_1.total_pages);
                        cacheRef.current[page] = newResponse_1.results;
                    }
                    else
                        throw error;
                    if (page + 1 > newResponse_1.total_pages) {
                        setHasMore(false);
                    }
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _a.sent();
                    setError(true); // Set error state to true
                    setHasMore(false); // Stop further attempts
                    return [2 /*return*/, error_1];
                case 4:
                    setIsLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); }, [page, hasMore, isLoading, fetchItems, error]);
    var handleObserver = useCallback(function (entries) {
        var target = entries[0];
        if (target.isIntersecting && hasMore && !isLoading && !error) { // Add error check
            loadMoreItems();
        }
    }, [hasMore, isLoading, loadMoreItems, error] // Add error to dependencies
    );
    useEffect(function () {
        if (observer.current)
            observer.current.disconnect();
        observer.current = new IntersectionObserver(handleObserver, {
            root: root,
            rootMargin: rootMargin,
            threshold: threshold,
        });
        if (lastElementRef.current)
            observer.current.observe(lastElementRef.current);
        return function () {
            if (observer.current)
                observer.current.disconnect();
        };
    }, [handleObserver, root, rootMargin, threshold]);
    useEffect(function () {
        if (cache) {
            localStorage.setItem('infiniteScrollItems', JSON.stringify(items));
            localStorage.setItem('infiniteScrollPage', JSON.stringify(page));
        }
    }, [items, page, cache]);
    return { lastElementRef: lastElementRef, items: items, isLoading: isLoading, error: error };
};
export default useInfiniteScroll;
