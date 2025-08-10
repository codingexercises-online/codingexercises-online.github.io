export const metadata = {
  title: "Data Structures — Storage Models and ADTs",
  description:
    "A paradigm that unifies in-memory storage models (indexes and pointers) with abstract data types (ADTs) and their constraints.",
};

export default function DataStructuresPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1>Data Structures</h1>

      <h2>What are data structures?</h2>
      <p>
        To properly define a data structure, we need to first talk about where they
        live when you&apos;re using them in your programs and what we do with them.
      </p>
      <p>
        As you can imagine, generally, data structures exist within RAM. They&apos;re
        basically a collection of interrelated bytes and pointers that are being
        stored there for your programs to use. These bytes can either be physically
        right next to each other in a sequence, or they can be in completely distant
        regions of your RAM. All that matters is that they are modeled in a way that
        allows us to group related bytes together. The way that you choose to do that
        is what we&apos;re going to refer to as your <strong>Storage Model</strong>.
      </p>
      <p>
        Let&apos;s put a pin in that to talk about what we do with these bytes. Even when
        you&apos;ve stored a collection of interrelated bytes and pointers in your RAM, your
        RAM doesn&apos;t know that the bytes it contains mean something to you. They&apos;re just
        electric charges that were put there. It&apos;s up to you, the programmer, and your
        program, to define a logical contract for how those bytes should be treated to do
        anything meaningful. That&apos;s what we call an <strong>Abstract Data Type</strong>.
      </p>
      <p>
        Having a grasp of these two concepts, a Data Structure is essentially a logical
        unit of data that is defined by both the Storage Model you&apos;ve used to represent
        it in memory, and its Abstract Data Type (ADT) that tells you how to interact with
        them. Essentially, the foundational storage model describes how data is physically
        stored and accessed in memory, while the ADT defines its logical behavior and
        constraints.
      </p>

      <h2>Foundational Storage Models: Indexes and Pointers</h2>
      <p>
        The two fundamental ways to store data are through <strong>indexes</strong> and
        <strong> pointers</strong>. Each has its own set of strengths and limitations.
      </p>

      <h3>Indexes</h3>
      <p>
        Indexes refer to a data storage model where related elements of the same type are
        stored in a contiguous block of memory. This fixed, ordered arrangement makes it
        possible to access any given element within a constant time.
      </p>
      <p>How does this black magic work? Let&apos;s discuss it in the next section.</p>

      <h4>Accessing Elements in an Index</h4>
      <p>
        The key is that Indexes are predefined to have a fixed size, and each element in
        the index has to be of the same type, and therefore also has the same size. Locations
        in your RAM are represented using numbers.
      </p>
      <p>
        The RAM itself is one big index. It contains millions of slots, each of a fixed size,
        called a byte. You can reference a byte using a numerical index. For example, you can
        ask the RAM to put something in byte number 34, or to retrieve something that&apos;s stored
        in byte number 1037. You can also work with groups of bytes. So you can essentially ask
        your RAM to put something in byte numbers 500–536, or to retrieve something stored in
        another range of bytes absolutely anywhere in the RAM.
      </p>
      <p>
        Having understood that, when you store an Indexed data structure in RAM, you place all
        of its elements physically next to each other. That means that all the numerical indices
        of the RAM in between the start of your data, and the end of your data, only contain your data.
      </p>
      <p>
        Let&apos;s say that in your program, you want to define a list of 5 integers that you wanted to
        store inside RAM. Let&apos;s just assume that each integer takes up 4 bytes of RAM, because all
        similar elements take up the same amount of space.
      </p>
      <pre>
        <code>intArray = [1, 2, 3, 4, 5]</code>
      </pre>
      <p>
        Now, your program has to ask your CPU, “Hey. I have a list of 5 integers, each of them are 4
        bytes. That&apos;s 20 bytes total. So can you find somewhere in RAM to store these 20 bytes for me?
        I want them right next to each other.”
      </p>
      <p>
        Your CPU says, “Sure. There&apos;s an empty table over in index 2000 that has just enough space to
        fit all of your integer friends.”
      </p>
      <p>
        Now, you store your list of integers at that location. So basically, your integers occupy the
        memory indices 2000–2020.
      </p>
      <p>
        If you want to get the first integer in your list, you&apos;ll find it at index 2000. If you want the
        second integer, you&apos;ll find it at index 2004 (since the first integer occupied 4 bytes, and the
        elements are all physically next to each other). The third integer is at 2008, and so on.
      </p>
      <p>
        Now, let&apos;s say, you only have a pointer to the beginning of your array. That is your
        <code>intArray</code> variable typically will only contain the exact index of the beginning of your array.
      </p>
      <p>
        Basically, the value inside <code>intArray&amp;</code> = 2000. Because 2000 is the memory index that contains the
        very first element in your array.
      </p>
      <p>What do you do when you want to find a pointer to the second element in your array?</p>
      <ul>
        <li>2000 + 4 = 2004</li>
      </ul>
      <p>To get the third element:</p>
      <ul>
        <li>2000 + 2 * 4 = 2008</li>
      </ul>
      <p>To get the fourth element:</p>
      <ul>
        <li>2000 + 3 * 4 = 2012</li>
      </ul>
      <p>
        Basically, to get a pointer to the nth element of the array, you can just say:
        <code>startingPointer + (n - 1) * elementSize</code>.
      </p>
      <p>
        To your computer, this is an operation it can do in a constant time. That&apos;s why we say that
        accessing elements in an Indexed data structure can be done in constant time.
      </p>
      <p>
        Also note that for the first element: <code>2000 + (1 - 1) * 4 = 2000</code>. This is why, in practice, indexing
        starts at 0.
      </p>
      <p>
        Recap: An Indexed Storage Model stores interrelated elements of fixed size within a contiguous block,
        which is why it provides constant-time random access.
      </p>

      <h4>Adding and Removing Items in an Index Model</h4>
      <p>
        This model is not efficient for adding and removing items due to the requirement of a contiguous
        memory block. Growing often requires allocating a new block and copying elements.
      </p>

      <h3>Pointers</h3>
      <p>
        Pointers refer to a data storage model where elements are stored in non-contiguous memory locations.
        Each element (node) contains data plus a reference (pointer) to the next element.
      </p>

      <h4>Accessing Elements in a Pointer Model</h4>
      <p>
        There&apos;s no constant-time address computation. You must navigate from the head, following pointers.
        Access time grows with position.
      </p>

      <h4>Adding and Removing Items in a Pointer Model</h4>
      <p>
        Inserts and deletes are localized pointer updates—fast and flexible without contiguous storage.
      </p>

      <h2>Abstract Data Types (ADTs)</h2>
      <p>
        An ADT is a logical model—its operations and rules—independent of storage. A <em>data structure</em> is the
        combination of an ADT with one or more storage models that realize it efficiently.
      </p>

      <h3>Relationship Between ADTs and Storage Models</h3>
      <p>
        ADTs can be implemented using indexes, pointers, or both. Examples: Hash maps combine hashing with arrays;
        heaps are logically trees but efficiently implemented with arrays.
      </p>

      <h3>Typical Logical Constraints for ADTs</h3>
      <ul>
        <li>
          <strong>Access Constraints</strong>: e.g., Stack (LIFO), Queue (FIFO)
        </li>
        <li>
          <strong>Ordering Constraints</strong>: e.g., Heap property enabling peek/extract operations
        </li>
        <li>
          <strong>Relationship Constraints</strong>: e.g., Trees (parent/child), Graphs (arbitrary edges)
        </li>
      </ul>

      <h2>Useful Data Structures</h2>
      <h3>1. Linear Data Structures</h3>
      <p>
        <strong>Static and Dynamic Arrays</strong>: index-based with random access; dynamic arrays resize via copy.
      </p>
      <p>
        <strong>Linked Lists</strong>: pointer-based; singly, doubly, circular; efficient insert/delete.
      </p>
      <p>
        <strong>Stacks, Queues, Deques</strong>: ADTs defined by access constraints; implementable via arrays or lists.
      </p>

      <h3>2. Hash-Based ADTs</h3>
      <p>
        <strong>Hash Tables/Maps</strong>: hashing to array indices for near-constant queries. <strong>Bloom Filters</strong>:
        probabilistic membership with false positives.
      </p>

      <h3>3. Tree-Based ADTs</h3>
      <p>
        <strong>Trees, Binary Trees, BSTs</strong>; self-balancing variants (AVL, Red-Black, Splay); B-Trees for disk; tries/ternary
        trees for strings; quadtrees/octrees/k-d trees for spatial data; treaps and R-trees.
      </p>

      <h3>4. Heap-Based ADTs</h3>
      <p>
        <strong>Heaps</strong>: array-backed binary trees satisfying heap property; <strong>Fibonacci heaps</strong> for advanced operations.
      </p>

      <h3>5. Graph-Based ADTs</h3>
      <p>
        Graphs (directed/undirected, weighted, acyclic, bipartite) and Disjoint Set Union (DSU).
      </p>

      <h3>6. Specialized &amp; Advanced ADTs</h3>
      <p>
        Segment Trees, Fenwick Trees; Skip Lists; Suffix Trees/Arrays; van Emde Boas/Fusion Trees; Finger Trees; Persistent DS.
      </p>

      <p>
        We&apos;ll cover these in case studies with practical exercises.
      </p>
    </article>
  );
}
