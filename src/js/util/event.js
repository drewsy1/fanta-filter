import {within} from './filter';
import {closest, findAll} from './selector';
import {isArray, isFunction, isString, toNode, toNodes} from './lang';

export function on(...args) {

    let [targets, type, selector, listener, useCapture] = getArgs(args);

    targets = toEventTargets(targets);

    if (selector) {
        listener = delegate(targets, selector, listener);
    }

    if (listener.length > 1) {
        listener = detail(listener);
    }

    type.split(' ').forEach(type =>
        targets.forEach(target =>
            target.addEventListener(type, listener, useCapture)
        )
    );
    return () => off(targets, type, listener, useCapture);
}

export function off(targets, type, listener, useCapture = false) {
    targets = toEventTargets(targets);
    type.split(' ').forEach(type =>
        targets.forEach(target =>
            target.removeEventListener(type, listener, useCapture)
        )
    );
}

function getArgs(args) {
    if (isFunction(args[2])) {
        args.splice(2, 0, false);
    }
    return args;
}

function delegate(delegates, selector, listener) {
    return e => {

        delegates.forEach(delegate => {

            const current = selector[0] === '>'
                ? findAll(selector, delegate).reverse().filter(element => within(e.target, element))[0]
                : closest(e.target, selector);

            if (current) {
                e.delegate = delegate;
                e.current = current;

                listener.call(this, e);
            }

        });

    };
}

function detail(listener) {
    return e => isArray(e.detail) ? listener(...[e].concat(e.detail)) : listener(e);
}

function isEventTarget(target) {
    return target && 'addEventListener' in target;
}

function toEventTarget(target) {
    return isEventTarget(target) ? target : toNode(target);
}

export function toEventTargets(target) {
    return isArray(target)
            ? target.map(toEventTarget).filter(Boolean)
            : isString(target)
                ? findAll(target)
                : isEventTarget(target)
                    ? [target]
                    : toNodes(target);
}