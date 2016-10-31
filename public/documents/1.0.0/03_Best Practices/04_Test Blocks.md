```ruby
def sum_func
  p "wow!"

  ['this', 'test'].each do |i|
    p "i!"
  end
end
```

```JavaScript
i = 10;
here = ['nor', 'there'];

obj = {
  this.where = here;

  function whereami() {
    this.where.forEach(function(i){
      console.log(i);
    })
  }
}