
// 在Node.js中，Buffer是用于处理二进制数据的类。它允许您在Node.js中以字节的形式读取和写入数据。您可以使用Buffer来处理文件、网络流、加密算法等。它提供了一些方法来操作和转换数据，比如读取、写入、拷贝、切片等。Buffer在处理大量数据时非常高效，因为它可以直接操作内存。

// 区别
// 创建buffer的三种方式
// todo Buffer.alloc(size)：使用alloc方法创建的Buffer会分配指定大小的内存，并将其填充为0。这种方式是最安全的，因为它确保了新创建的Buffer中的数据不会包含旧数据的残留。
//
// todo Buffer.allocUnsafe(size)：使用allocUnsafe方法创建的Buffer也会分配指定大小的内存，但是它不会对内存进行初始化，因此可能包含旧数据的残留。这种方式比alloc更高效，但是需要手动对Buffer进行初始化。
//
// todo Buffer.from(array)或Buffer.from(string)：使用from方法可以通过传入数组或字符串来创建Buffer。如果传入的是字符串，它会根据指定的编码将字符串转换为二进制数据。这种方式是最灵活的，可以根据不同的数据源来创建Buffer。

// 1 alloc
let buf1 = Buffer.alloc(10)
console.log(buf1)

//2 allocUnsafe
let buf2 = Buffer.allocUnsafe(10)
console.log(buf2)

//3 from
let buf3 = Buffer.from('heelo')
console.log(buf3)
