let lyrics = `I know an old lady who swallowed a fly.
I don't know why she swallowed the fly. Perhaps she'll die.

I know an old lady who swallowed a spider.
It wriggled and jiggled and tickled inside her.
She swallowed the spider to catch the fly.
I don't know why she swallowed the fly. Perhaps she'll die.

I know an old lady who swallowed a bird.
How absurd to swallow a bird!
She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.
She swallowed the spider to catch the fly.
I don't know why she swallowed the fly. Perhaps she'll die.

I know an old lady who swallowed a cat.
Imagine that, to swallow a cat!
She swallowed the cat to catch the bird.
She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.
She swallowed the spider to catch the fly.
I don't know why she swallowed the fly. Perhaps she'll die.

I know an old lady who swallowed a dog.
What a hog, to swallow a dog!
She swallowed the dog to catch the cat.
She swallowed the cat to catch the bird.
She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.
She swallowed the spider to catch the fly.
I don't know why she swallowed the fly. Perhaps she'll die.

I know an old lady who swallowed a goat.
Just opened her throat and swallowed a goat!
She swallowed the goat to catch the dog.
She swallowed the dog to catch the cat.
She swallowed the cat to catch the bird.
She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.
She swallowed the spider to catch the fly.
I don't know why she swallowed the fly. Perhaps she'll die.

I know an old lady who swallowed a cow.
I don't know how she swallowed a cow!
She swallowed the cow to catch the goat.
She swallowed the goat to catch the dog.
She swallowed the dog to catch the cat.
She swallowed the cat to catch the bird.
She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.
She swallowed the spider to catch the fly.
I don't know why she swallowed the fly. Perhaps she'll die.

I know an old lady who swallowed a horse.
She's dead, of course!`

export class Song {
  verse(x) {
    let parts = lyrics.split(/\n/g).toString().split(',,')

    for(let i = 0; i < parts.length; i++){
        parts[i] = parts[i].split('.,').toString();
    }

    for(let i = 0; i < parts.length; i++){
        parts = parts.map(item => item.replace(', ', '@'));
    }

    for(let i = 0; i < parts.length; i++){
        parts = parts.map(item => item.replace(',', '.\n'));
    }

    for(let i = 0; i < parts.length; i++){
        parts = parts.map(item => item.replace('@', ', '));
    }

    for(let i = 0; i < parts.length; i++){
        parts[i] = parts[i].split('!.').join('!');
    }
    return parts[x-1];
  }

  verses(x, y) {
    let parts = lyrics.split(/\n/g).toString().split(',,')

    for(let i = 0; i < parts.length; i++){
        parts[i] = parts[i].split('.,').toString();
    }

    for(let i = 0; i < parts.length; i++){
        parts = parts.map(item => item.replace(', ', '@'));
    }

    for(let i = 0; i < parts.length; i++){
        parts = parts.map(item => item.replace(',', '.\n'));
    }

    for(let i = 0; i < parts.length; i++){
        parts = parts.map(item => item.replace('@', ', '));
    }

    for(let i = 0; i < parts.length; i++){
        parts[i] = parts[i].split('!.').join('!');
    }

    let result = parts.slice(x-1, y)
    result = result
      .map(item => item + '\n')
      .toString()
      .split(',I')
      .join('\nI')
    return result;
  }
}

